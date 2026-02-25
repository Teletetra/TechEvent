import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '15px 30px', 
      backgroundColor: '#343a40', 
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <div>
        <h3 style={{ margin: 0 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>TechEvent Manager</Link>
        </h3>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {/* User Links */}
        <Link to="/" style={{ color: '#f8f9fa', textDecoration: 'none' }}>Portal</Link>
        <Link to="/cart" style={{ color: '#f8f9fa', textDecoration: 'none' }}>Cart</Link>
        <Link to="/order-status" style={{ color: '#f8f9fa', textDecoration: 'none' }}>My Orders</Link>
        
        <span style={{ borderLeft: '1px solid #6c757d', height: '20px' }}></span>

        {/* Admin Links */}
        <span style={{ color: '#adb5bd', fontSize: '14px' }}>Admin:</span>
        <Link to="/admin/update-orders" style={{ color: '#17a2b8', textDecoration: 'none', fontWeight: 'bold' }}>Update Orders</Link>
        <Link to="/admin/vendors" style={{ color: '#17a2b8', textDecoration: 'none', fontWeight: 'bold' }}>Vendors</Link>
      </div>
    </nav>
  );
};

export default Navbar;