import express from "express";
import { Auth } from "../middleware/userAuthMiddleWare.js";
import { GetContact, sendContact } from "../Controllers/contactControllers.js";
const router = express.Router();

router.post("/contact", sendContact);
router.get("/contact", Auth, GetContact);
export default router;
