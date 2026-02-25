import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderStatus = () => {
  const navigate = useNavigate();

  // Mock data for user's order history
  const [orders] = useState([
    { 
      id: 'ORD-8472', 
      date: '2026-02-25', 
      items: 'Wireless Microphone, 4K Projector', 
      total: 6500, 
      method: 'UPI', 
      status: 'Pending Approval' // This is the state the admin will change
    }
  ]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>My Order Status</h2>
      <p>Track your requested technical equipment here.</p>

      {orders.length === 0 ? (
        <p>You have no recent orders.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {orders.map((order) => (
            <div key={order.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', backgroundColor: '#fdfdfd' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
                <strong>Order #: {order.id}</strong>
                <span style={{ color: '#888', fontSize: '14px' }}>{order.date}</span>
              </div>
              <p style={{ margin: '5px 0' }}><strong>Items:</strong> {order.items}</p>
              <p style={{ margin: '5px 0' }}><strong>Total:</strong> ₹{order.total} ({order.method})</p>
              
              <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#eef6fc', borderRadius: '4px', borderLeft: '4px solid #007bff' }}>
                <strong>Current Status: </strong> 
                <span style={{ color: '#0056b3', fontWeight: 'bold' }}>{order.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Back to Portal
        </button>
      </div>
    </div>
  );
};

export default OrderStatus