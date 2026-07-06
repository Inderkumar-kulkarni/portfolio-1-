import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/sendEmail.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const backupFile = path.resolve(__dirname, "..", "contact-backup.log");

export const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    if (!firstName || !lastName || !email || !subject) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    let contact;
    let dbError;
    try {
      contact = await Contact.create({ firstName, lastName, email, subject, message });
    } catch (err) {
      dbError = err;
      console.warn("Could not save contact to MongoDB:", err.message);
      try {
        const backupEntry = `${new Date().toISOString()} | ${firstName} ${lastName} | ${email} | ${subject} | ${message.replace(/\n/g, " ")}\n`;
        await fs.appendFile(backupFile, backupEntry, "utf8");
        console.info("Saved contact submission to backup log.");
      } catch (backupErr) {
        console.error("Backup save failed:", backupErr.message);
      }
    }

    let emailError;
    try {
      await sendContactEmail({ firstName, lastName, email, subject, message });
    } catch (err) {
      emailError = err;
      console.error("Email sending failed:", err.message);
    }

    if (contact && !emailError) {
      return res.status(201).json({ success: true, id: contact._id });
    }

    if (contact && emailError) {
      return res.status(201).json({
        success: true,
        warning: "Your message was received, but the email notification could not be sent. Check server email settings.",
        id: contact._id,
      });
    }

    if (!contact && !emailError) {
      return res.status(200).json({
        success: true,
        warning: "Your message was received and backed up, but it could not be saved to the database.",
      });
    }

    if (!contact && emailError) {
      return res.status(201).json({
        success: true,
        warning: "Your message was backed up, but the email notification could not be sent. Check server settings.",
      });
    }

    const responseMessage =
      emailError?.message ||
      dbError?.message ||
      "Unable to send your message. Please try again later.";

    return res.status(500).json({
      success: false,
      message: responseMessage,
    });
  } catch (err) {
    console.error("Contact submission error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong on the server. Please try again later.",
    });
  }
};
