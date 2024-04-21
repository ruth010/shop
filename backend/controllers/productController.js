const product = require('../models/productModel');

// GET Products
exports.getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
    // console.log(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST Products
exports.createProduct = async (req, res) => {
  console.log(req.body);
  try {
    const newProduct = await product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT (Update) Product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Product
exports.deleteProduct = async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

