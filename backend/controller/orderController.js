import Order from "../models/order.js";
import sendEmail from "../utils/sendEmail.js"


const createOrder = async (req, res)=>{
    try {
        const {items, totalAmount, address, paymentId}= req.body;

        if(!items || items.length === 0 || !address || !paymentId){
            return res.status(404).json({message:"invalid order data"});
        }else{
            const order = new Order({
                user: req.user._id,
                items,
                totalAmount,
                paymentId,
                address
            });

            await order.save();
            await sendEmail(req.user.email, "Order created", "Your order has been placed successfully");
            res.status(200).json({message:"Order created successfully", order});
        }
    } catch (error) {
        res.status(500).json({message:"invalid server error", error});
    }
};

const myOrders = async(req,res)=>{
    try {
        const orders = await Order.find({user: req.user._id}).populate('items.productId', 'name price')
        res.json(orders);
    } catch (error) {
        res.status(500).json({message:"internal server error", error})
    }
}

const getOrders = async(req,res)=>{
    try {
        const orders = await Order.find({}).populate('user', 'id name')
        res.json(orders)
    } catch (error) {
        res.status(500).json({message: "internal server error", error})
    }
}

const updateOrderStatus = async(req,res)=>{
    try {
        const {status} = req.body ;
        const order = await Order.findById(req.params.id);

        if(order){
            order.status = status;
            await order.save();
            res.json({message:"order successfully updated"})
        }
    } catch (error) {
        res.status(500).json({message: "internal server error", error})
    }
}

export {
    createOrder,
    myOrders,
    getOrders,
    updateOrderStatus,
}