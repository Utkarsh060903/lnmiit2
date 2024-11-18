import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { sendEmail } from "../controllers/nodeMailerController.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
};

const adminLogin = async (req, res) => {
  const { email, password} = req.body;
  try {
    const user = await adminModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "invalid credentials" });
    }

    const token = createToken(user._id);
    return res.json({ success: true, token, name: user.name });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "error" });
  }
};

const adminRegister = async (req, res) => {
  const {email, password, username} = req.body;
  try {
    const exist = await adminModel.findOne({ email });
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
    const newUser = new adminModel({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    // sendEmail(
    //   user.email,
    //   "Welcome to Our Service",
    //   `Hi ${user.name},\n\nThank you for adminRegistering with us.\n\nBest regards,\nYour Company`
    // );

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

export { adminLogin, adminRegister };
