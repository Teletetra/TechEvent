const express = require('express');
const router = express.Router();
const { createOrder, updateOrderStatus } = require('../controllers/orderController');

router.post('/', createOrder); // POST to /api/orders creates an order
router.put('/:id/status', updateOrderStatus); // PUT to /api/orders/:id/status updates it

module.exports = router;