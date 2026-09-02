import express from "express";
import {
  getMailingList,
  joinMailingList,
  removeMailingList,
} from "../Controllers/mailingControllers.js";
import { Auth } from "../middleware/userAuthMiddleWare.js";
const router = express.Router();
router.post("/joinMailingList", joinMailingList);
router.get("/getMailingList", Auth, getMailingList);
router.delete("/removeMailingList/:id", removeMailingList);
export default router;
