import React from "react";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/About.jsx"
import Disclaimer from "./pages/Disclaimer.jsx";
import ReturnPolicy from "./pages/ReturnPolicy.jsx"
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductDetail from "./pages/ProductDetail.jsx"
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx"
import Profile from "./pages/Profile.jsx"
import Checkout from "./pages/Checkout.jsx";
import AddProduct from "./admin/AddProduct.jsx"
import AdminDashboard from "./admin/AdminDashboard.jsx"
import AdminOrders from "./admin/AdminOrders.jsx"
import AdminProducts from "./admin/AdminProducts.jsx"
import AdminUsers from "./admin/AdminUsers.jsx"
import EditProduct from "./admin/EditProduct.jsx"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/return" element={<ReturnPolicy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/ordersuccess" element={<OrderSuccess />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/add-product" element={<AddProduct />} />
                    <Route path="/admin/products" element={<AdminProducts />} />
                    <Route path="/admin/edit-product/:id" element={<EditProduct />} />
                    <Route path="/admin/orders" element={<AdminOrders />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
