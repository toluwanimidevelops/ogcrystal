import MailingList from "../Schema/mailingList.js";
// Join Mailing List
export const joinMailingList = async (req, res) => {
  try {
      const { email } = req.body;
      if (!email) {
          return res.status(400).json({success:false, message:"An email is required"})
      }
      const isAlreadyExist = await MailingList.find({ email }) 
      if (isAlreadyExist) {
          return res.status(400).json({success:false, message:"This email already exist in our mailing list "})
      }
      const response = await MailingList.create({ email });
      res.status(201).json({success:true, message:"Email has been added to the mailng list"})
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// Get Mailing List
export const getMailingList = async (req, res) => {
    try {
        const mailingList = await MailingList.find({}).sort({ createdAt: -1 })
        res.status(200).json({ success: true, mailingList })
        
    } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}
// Delete from MailingList
export const removeMailingList = async (req, res) => {
    try {
        const deleted = await MailingList.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true, message:"User has been removed Successfully "})
    }catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}