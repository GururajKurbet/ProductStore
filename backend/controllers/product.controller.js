import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts =async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(500).json({ success: false, message: '"server error"' });
    }
  };

export const createProduct=async (req, res) => {
    const product = req.body; //user will send this data
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields" });
    }
    const newProduct = new Product(product);
    try {
      await newProduct.save();
      return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      console.log("Error in creating product:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };
  
export const updateProduct=async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid ID format" });
    }
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {
        new: true,
      });
      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      res.status(500).json({ success: false, message: "server not found" });
    }
  };

export const deleteProduct=async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid ID format" });
    }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };