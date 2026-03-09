const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'Audio', 'Video', 'Lighting'
  price: { type: Number, required: true },
  available: { type: Number, required: true, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);