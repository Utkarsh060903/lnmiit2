import express from "express"
import { confirmEmail } from "../controllers/emailConfirm.js"

const confirmRouter = express.Router()

confirmRouter.post("/send-email-confirm", confirmEmail)

export default confirmRouter