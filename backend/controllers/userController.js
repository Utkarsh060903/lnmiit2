import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { sendEmail } from "../controllers/nodeMailerController.js"

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
};

const login = async (req, res) => {
    const { email, password, username } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        res.json({ success: false, message: "user does not exist" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.json({ success: false, message: "invalid credentials" });
      }
      const token = createToken(user._id);
      res.json({ success: true, token ,  name: user.name});
    } catch (error) {
      console.log(error);
      res.json({ success: false, mesage: "error" });
    }
  };
 
const register = async (req, res) => {
    const { username, email, password, userType } = req.body;
    try {
      const exist = await userModel.findOne({ email });
      if (exist) {
        return res.json({ success: false, message: "user already exist" });
      }
      if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "please enter valid email" });
      }
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "please enter strong password",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new userModel({
        username: username,
        email: email,
        password: hashedPassword,
        userType: userType
      });
      const user = await newUser.save();
      const token = createToken(user._id);
      sendEmail(
        user.email,
        'Welcome to Our Service',
        `Hi ${user.name},\n\nThank you for registering with us.\n\nBest regards,\nYour Company`
      );
  
      res.json({ success: true, token });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "error" });
    }
  };
  
  export { login, register };
  