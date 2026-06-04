import crypto from "crypto";
import dotenv from "dotenv"
import Razorpay from "razorpay";

dotenv.config();

const createdOrder = async(req, res)=>{
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_ID,
            key_secret: process.env.RAZORPAY_SECRET_KEY,
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex")
        };
        const order = await instance.orders.create(options);
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
};

const verifyPayment = async(req,res)=>{
    try {
        const {Razorpay_order_id, Razorpay_signature,Razorpay_payment_id} = req.body;
        const generated_signature = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET_KEY).update(Razorpay_order_id + '|' + Razorpay_payment_id).digest("hex");

        if(generated_signature === Razorpay_signature){
            res.status(200).json({message:"payment verify successfully"});
        }else{
            res.status(400).json({message:"payment verify failed"});
        }
    } catch (error) {
        res.status(500).json({message:"internal server error"}) 
    }
}

export {
    createdOrder,
    verifyPayment,
}