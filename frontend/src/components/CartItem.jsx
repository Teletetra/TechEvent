import React from 'react';
import Dropdown from './Dropdown'; // Reusing our new Dropdown component!

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  // Generate options for the quantity dropdown [1, 2, 3, 4, 5]
  const qtyOptions = [1, 2, 3, 4, 5].map(num => ({ value: num, label: num.toString() }));

  return (
    <li style={{ 
      borderBottom: '1px solid #ccc', 
      padding: '15px 0', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <div style={{ flex: 1 }}>
        <strong style={{ fontSize: '16px', color: '#333' }}>{item.name}</strong>
        <p style={{ margin: '5px 0 0 0', color: '#555', fontSize: '14px' }}>
          ₹{item.price} per day
        </p>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ width: '80px' }}>
          <Dropdown 
            id={`qty-${item.id}`}
            value={item.quantity}
            options={qtyOptions}
            onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
            placeholder="Qty"
          />
        </div>
        
        {/* Optional Remove Button */}
        <button 
          onClick={() => onRemove(item.id)}
          style={{ 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            padding: '8px 12px', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;