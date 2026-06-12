# ShopNest

A full-stack MERN E-Commerce application built with React, Redux, Node.js, Express, MongoDB, Cloudinary, and Razorpay.

## Features

### User Features

- User Registration & Login
- JWT Authentication
- Product Browsing
- Product Search
- Product Details Page
- Shopping Cart
- Checkout System
- Order History
- User Profile Management

### Admin Features

- Admin Dashboard
- Product Management
- Add Products
- Edit Products
- Delete Products
- Order Management
- User Directory
- Sales Analytics

### Integrations

- MongoDB Atlas
- Cloudinary Image Uploads
- Razorpay Payment Gateway
- Redux Toolkit

---

## Tech Stack

### Frontend

- React
- React Router
- Redux Toolkit
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

---

## Project Structure

```
ShopNest
│
├── frontend
│   ├── src
│   ├── public
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── config
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/shopnest.git
```

### Install Dependencies

```bash
npm run install-all
```

### Configure Environment Variables

Create:

```bash
backend/.env
```

Use:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

CLOUDINARY_CLOUD_NAME=YOUR_NAME
CLOUDINARY_API_KEY=YOUR_KEY
CLOUDINARY_API_SECRET=YOUR_SECRET

RAZORPAY_KEY_ID=YOUR_KEY
RAZORPAY_KEY_SECRET=YOUR_SECRET
```

### Seed Database

```bash
cd backend
node seed.js
```

### Run Application

```bash
npm run dev
```

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:5000
```

---

## Default Admin Account

```text
Email: admin@shopnest.com
Password: password123
```

Created automatically through:

```bash
node seed.js
```

---

## Future Improvements

- Product Reviews
- Wishlist
- Coupons & Discounts
- Order Tracking
- Email Notifications
- Responsive Dashboard Charts

---

## Author

Swayam Jain

Computer Science Student

MERN Stack Developer
