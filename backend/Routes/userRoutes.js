// Login Admin Portal
import express from "express";
import jwt from "jsonwebtoken";
import { Auth } from "../middleware/userAuthMiddleWare.js";
import { getDashboard } from "../Controllers/blogControllers.js";
let router = express.Router();

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMINEMAIL ||
      password !== process.env.ADMINPASSWORD
    ) {
      return res
        .status(401)
        .json({ success: false, message: "User Unauthorized" });
    }
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const isAuthorized = async (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
router.post("/auth/login", Login);
router.get("/auth/dashboard", Auth, getDashboard);

router.get("/auth/isauthorized", Auth, isAuthorized);
export default router;
