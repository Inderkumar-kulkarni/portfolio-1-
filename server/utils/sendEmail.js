import nodemailer from "nodemailer";

let transporter;

const getTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;

  if (!user || !pass || !process.env.RECEIVER_EMAIL) {
    throw new Error(
      "Email is not configured. Set EMAIL_USER, EMAIL_APP_PASSWORD, and RECEIVER_EMAIL in the server .env file."
    );
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });
  }
  return transporter;
};

export const sendContactEmail = async ({ firstName, lastName, email, subject, message }) => {
  const mail = getTransporter();

  await mail.sendMail({
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject} — from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <h3>New message from your portfolio site</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    `,
  });
};
