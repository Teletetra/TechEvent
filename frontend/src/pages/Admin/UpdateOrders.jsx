import React, { useState } from 'react';

const UpdateOrders = () => {
  // Mock data of all user orders
  const [allOrders, setAllOrders] = useState([
    { id: 'ORD-8472', user: 'John Doe', items: 'Wireless Mic, Projector', status: 'Pending Approval' },
    { id: 'ORD-9103', user: 'Jane Smith', items: 'PA System', status: 'Approved' },
  ]);

  const handleStatusChange = (orderId, newStatus) => {
    // In a real app, you would make an Axios PUT request to your Node backend here
    setAllOrders(allOrders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    alert(`Order ${orderId} status updated to: ${newStatus}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Admin: Update Order Status</h2>
      <p>Manage user requests and update fulfillment states.</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Order ID</th>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>User</th>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Items</th>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Update Status ("State will Change")</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => (
            <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}><strong>{order.id}</strong></td>
              <td style={{ padding: '10px' }}>{order.user}</td>
              <td style={{ padding: '10px' }}>{order.items}</td>
              <td style={{ padding: '10px' }}>
                <select 
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  style={{ padding: '5px', borderRadius: '4px' }}
                >
                  <option value="Pending Approval">Pending Approval</option>
                  <option value="Approved">Approved</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="Completed / Returned">Completed / Returned</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateOrders;