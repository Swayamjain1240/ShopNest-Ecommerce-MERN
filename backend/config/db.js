import mongoose from "mongoose";

const ConnectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connect")
    } catch (error) {
        console.error("error in connection of mongoose" , error)
    }
}

export default ConnectDb; 