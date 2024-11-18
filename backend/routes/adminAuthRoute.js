import express from "express"
import { adminLogin, adminRegister } from "../controllers/adminAuthController.js"

const adminAuth = express.Router()

adminAuth.post('/admin-register' , adminRegister)
adminAuth.post('/admin-login' , adminLogin)

export default adminAuth