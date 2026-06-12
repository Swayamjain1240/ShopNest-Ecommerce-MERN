import mongoose from "mongoose";

const ConnectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(process.env.MONGO_URL);
        console.log("mongodb connect")
    } catch (error) {
        console.error("error in connection of mongoose" , error)
        process.exit(1);
    }
}

export default ConnectDb; 