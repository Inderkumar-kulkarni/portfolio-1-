import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
