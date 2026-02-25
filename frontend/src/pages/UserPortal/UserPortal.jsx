import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Import Context

const UserPortal = () => {
  const { addToCart } = useCart(); // Access global add function
  const navigate = useNavigate();

  const equipmentList = [
    { id: 1, name: 'Wireless Microphone', category: 'Audio', available: 5, price: 1500 },
    { id: 2, name: '4K Projector', category: 'Video', available: 2, price: 5000 },
    { id: 3, name: 'PA System', category: 'Audio', available: 1, price: 8000 },
    { id: 4, name: 'Stage Lighting Kit', category: 'Lighting', available: 3, price: 3000 },
  ];

  const [selectedItemId, setSelectedItemId] = useState('');

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!selectedItemId) {
      alert('Please select an item from the dropdown first!');
      return;
    }
    
    // Find the full item object based on the selected ID
    const itemToAdd = equipmentList.find(item => item.id === parseInt(selectedItemId));
    
    // Send it to the global Cart Context
    addToCart(itemToAdd, 1); 
    alert(`${itemToAdd.name} successfully added to your cart!`);
    
    setSelectedItemId('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Technical Equipment Portal</h2>
      <p>Select the gear you need for your upcoming event.</p>

      <form onSubmit={handleAddToCart} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="equipment"><strong>Available Equipment:</strong></label>
          <select 
            id="equipment" 
            value={selectedItemId} 
            onChange={(e) => setSelectedItemId(e.target.value)}
            style={{ padding: '10px', fontSize: '16px', borderRadius: '4px' }}
          >
            <option value="">-- Select an Item --</option>
            {equipmentList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - ₹{item.price}/day ({item.available} in stock)
              </option>
            ))}
          </select>
        </div>

        <button type="submit" style={{ padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
          Add to Cart
        </button>
      </form>
      
      <hr style={{ margin: '30px 0', border: '1px solid #eee' }} />

      <div style={{ textAlign: 'center' }}>
        <button onClick={() => navigate('/cart')} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          Go to Cart & Checkout
        </button>
      </div>
    </div>
  );
};

export default UserPortal;