import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  address: { type: String },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
