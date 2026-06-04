import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from"jsonwebtoken";
import sendEmail from "../utils/sendEmail.js";


const generateToken = (id)=>{
    return jwt.sign(
        {id},
        process.env.JWT_SECRET_KEY,
        {expiresIn: "7d"}
    )
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please provide all fields"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            otp
        });

        const message = `Welcome to ShopNest, ${name}. Your OTP is ${otp}`;

        await sendEmail(email, "Welcome to ShopNest", message);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

//login user

const loginUser = async(req,res)=>{
    const {email , password}= req.body;
    
    try {
        const user = await User.findOne({email});

        if(user && (await bcrypt.compare(password, user.password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                token: generateToken(user._id)
            })
        }
        else{
            res.status(404).json({message:"invalid email or password"})
        }
    } catch (error) {
        console.error("error in login user", error);
    }
}

const getUser = async(req, res)=>{
    try {
        const user = await User.find({}).select('-password');
        res.json(user)
    } catch (error) {
       res.status(500).json({message:"Server Error"});
    }
}

export { generateToken, registerUser, loginUser, getUser };