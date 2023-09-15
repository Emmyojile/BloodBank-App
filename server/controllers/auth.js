import User from "../models/User.js";
import jwt from "jsonwebtoken"

//Register User
export const registerUser = async (req, res) => {    
    try {
        //check if user exists  
        const userExists = await User.findOne({email: req.body.email});
        if(userExists) {
            return res.send({
                success: false,
                message: "User already exists"
            });
        }

        //save user
        const user = new User(req.body);
        await user.save();

        return res.send({
            success: true,
            message: "User registered successfully"
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
}

//Login User
export const loginUser = async (req, res) => {    
    try {
        //check if user exists  
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            return res.send({
                success: false,
                message: "User not found",
            });
        }

        //check password
        const validPassword = await user.comparePassword(req.body.password, user.password);
        if(!validPassword) {
            return res.send({
                success: false,
                message: "Invalid password",
            });
        }

        //generate token
        // const token = user.createJWT();
        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET,{expiresIn:'1d'})

        return res.send({
            success: true,
            message: "User Logged in successfully",
            data: token
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        })
    }
}