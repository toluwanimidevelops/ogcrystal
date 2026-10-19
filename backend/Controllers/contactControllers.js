import Contact from "../Schema/contactSchema.js";

export const sendContact = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, address, message } = req.body;
    if (!fullName || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Fill all Required Field" });
    }
    const contact = await Contact.create({
      fullName,
      email,
      phoneNumber,
      address,
      message,
    });
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const GetContact = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json({ success: true, contacts });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
