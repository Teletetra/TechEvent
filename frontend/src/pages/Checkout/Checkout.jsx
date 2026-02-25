import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { getCartTotal, clearCart, cartItems } = useCart();
  
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Security check: Don't allow checkout if cart is empty
  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Cart is Empty</h2>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px', cursor: 'pointer' }}>Return to Portal</button>
      </div>
    );
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Please select a payment method (Cash or UPI).');
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Order of ₹${getCartTotal()} placed successfully using ${paymentMethod}!`);
      
      clearCart(); // Empty the global cart
      navigate('/order-status'); // Send user to tracking page
    }, 1500);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Checkout</h2>
      <p>Total Amount Due: <strong style={{ fontSize: '20px', color: '#28a745' }}>₹{getCartTotal()}</strong></p>

      <form onSubmit={handleCheckout} style={{ marginTop: '20px', padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>Payment Method</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          <label style={{ cursor: 'pointer' }}>
            <input type="radio" name="payment" value="UPI" onChange={(e) => setPaymentMethod(e.target.value)} style={{ marginRight: '10px' }} />
            <strong>UPI</strong> (Google Pay, PhonePe, Paytm)
          </label>
          
          <label style={{ cursor: 'pointer' }}>
            <input type="radio" name="payment" value="Cash" onChange={(e) => setPaymentMethod(e.target.value)} style={{ marginRight: '10px' }} />
            <strong>Cash</strong> (Pay on Pickup/Delivery)
          </label>
        </div>

        <button type="submit" disabled={isProcessing} style={{ width: '100%', padding: '12px', backgroundColor: isProcessing ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: isProcessing ? 'not-allowed' : 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
          {isProcessing ? 'Processing...' : 'Confirm Order'}
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={() => navigate('/cart')} style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#6c757d', border: '1px solid #6c757d', borderRadius: '4px', cursor: 'pointer' }}>
          Return to Cart
        </button>
      </div>
    </div>
  );
};

export default Checkout;