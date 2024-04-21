const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: String,
    src: String,
    description: String,
    category: String
});

const product = mongoose.model('product', productSchema);

module.exports = product;




