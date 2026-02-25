import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem'; // Import our reusable UI component

const Cart = () => {
  const navigate = useNavigate();
  // Pull all necessary data and functions from global context
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Your Equipment Cart</h2>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/')} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Browse Equipment
          </button>
        </div>
      ) : (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cartItems.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                onQuantityChange={updateQuantity} 
                onRemove={removeFromCart} 
              />
            ))}
          </ul>

          <div style={{ marginTop: '20px', textAlign: 'right', fontSize: '20px' }}>
            <strong>Estimated Total: ₹{getCartTotal()}</strong>
          </div>

          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={() => navigate('/')} style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Add More Items
            </button>
            <button onClick={() => navigate('/checkout')} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;