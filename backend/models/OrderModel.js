const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // In a full app, you'd link this to a User ID: user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  customerName: { type: String, required: true, default: 'Guest' }, 
  orderItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Item',
      },
    }
  ],
  paymentMethod: {
    type: String,
    required: true,
    enum: ['Cash', 'UPI'], // Matches CheckOut.csv
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending Approval', 'Approved', 'Dispatched', 'Completed / Returned', 'Cancelled'],
    default: 'Pending Approval',
  },
}, {
  timestamps: true, // Automatically creates createdAt and updatedAt fields
});

module.exports = mongoose.model('Order', orderSchema);