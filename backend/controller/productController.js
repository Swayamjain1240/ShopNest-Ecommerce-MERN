import Product from "../models/product.js"
import cloudinary from "../config/cloudinary.js"

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product)
        } else {
            res.status(404).json({ message: "Product not found" })
        }

    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
};

const createProducts = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        let imageUrl = '';

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        }

        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageURl
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

const updateProduct = async(req,res)=>{
    const {name, description, stock, price, category} = req.body;
    const product = await Product.findById(req.params.id);

    if(product){
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price ;
        product.category = category || product.category;
        product.stock = stock || product.stock;

        if(req.file){
            const result = await cloudinary.uploader.upload(req.file.path);
            product.imageUrl = result.secure_url;
        }

        const updateproduct = await product.save();
        res.json(updateproduct);
    }else{
        res.status(500).json({message:"serever  error "})
    }
}

const deleteProduct = async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id);

        if(product){
            await product.deleteOne();
            res.json({message:"product deleted successfully"})
        }else{
            res.status(404).json({message:"product not found"})
        }
    } catch (error) {
        res.status(500).json({message:"internal server error", error})
    }
}

export {
   getProductById,
   createProducts,
   getProducts,
   updateProduct,
   deleteProduct,
}