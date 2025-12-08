import userModel from "../models/userModels";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from "validator"

//login user
const loginUser = async (req, res) => {

}

//register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //chaecking is user already exist
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "user already exist" })
        }
        //validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter strong password" })
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: passowrd
        })
    } catch (error) {

    }

}

export { loginUser, registerUser }