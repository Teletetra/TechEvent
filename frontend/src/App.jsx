import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';

// Import Pages
import UserPortal from './pages/UserPortal/UserPortal';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import OrderStatus from './pages/OrderStatus/OrderStatus';
import ManageVendors from './pages/Admin/ManageVendors';
import UpdateOrders from './pages/Admin/UpdateOrders';
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', minHeight: '100vh', backgroundColor: '#fdfdfd' }}>
      
      {/* The Navbar will now appear at the top of every page */}
      <Navbar />
      
      <main>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<UserPortal />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-status" element={<OrderStatus />} />

          {/* Admin Routes */}
          <Route path="/admin/vendors" element={
                <ProtectedRoute requiredRole="admin">
                  <ManageVendors />
                </ProtectedRoute>
              } />
          <Route 
            path="/admin/update-orders" 
            element={
              <ProtectedRoute requiredRole="admin">
                <UpdateOrders />
              </ProtectedRoute>
            } 
          />

          {/* Fallback Route for 404 Not Found */}
          <Route 
            path="*" 
            element={
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            } 
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;