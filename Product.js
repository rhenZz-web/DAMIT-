
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    imageUrl: String
});

module.exports = mongoose.model('Product', ProductSchema);
