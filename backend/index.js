import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js"
import dns from "dns"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

import authRoutes from "./routes/authRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRouter.js"
import analyticsRoutes from "./routes/analyticsRoutes.js"


const app = express();
//cors:-
app.use(cors({
    origin:['http://localhost:3000', 'http://127.0.0.1:3000', process.env.FRONTEND_URL],
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));




if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
  res.sendFile(
  path.resolve(__dirname, '../frontend/dist/index.html')
)
} else {
  app.get('/', (req, res) => {
    res.send('ShopNest API is running in Development mode...');
  });
}


app.use("/api/auth", authRoutes)
app.use("/api/products",productRoutes )
app.use("/api/orders", orderRoutes)
app.use("/api/payment", paymentRoutes)
app.use("/api/analytics" , analyticsRoutes )

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
  ConnectDb()
})