import React, { useState } from 'react';

const ManageVendors = () => {
  const [vendors] = useState([
    { id: 'V01', name: 'TechAudio Supplies', contact: 'audio@example.com', category: 'Audio' },
    { id: 'V02', name: 'Lumina Stage Gear', contact: 'lights@example.com', category: 'Lighting' },
  ]);

  const handleRequestItem = (e) => {
    e.preventDefault();
    alert('Item request sent to vendor successfully!');
    // Real app: Axios POST to backend to email/notify vendor
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Admin: Vendor Management</h2>
      
      {/* Mapped to: Maintain Vendor.csv */}
      <div style={{ marginBottom: '40px' }}>
        <h3>Maintain Vendors</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {vendors.map((vendor) => (
            <li key={vendor.id} style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>{vendor.name}</strong> ({vendor.category})
                <br /><span style={{ fontSize: '14px', color: '#555' }}>Contact: {vendor.contact}</span>
              </div>
              <button style={{ padding: '5px 10px', backgroundColor: '#17a2b8', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
            </li>
          ))}
        </ul>
        <button style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+ Add New Vendor</button>
      </div>

      <hr style={{ border: '1px solid #eee', margin: '30px 0' }}/>

      {/* Mapped to: Request Item.csv */}
      <div>
        <h3>Request Item from Vendor</h3>
        <form onSubmit={handleRequestItem} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Select Vendor:</label>
            <select style={{ width: '100%', padding: '8px', borderRadius: '4px' }} required>
              <option value="">-- Choose Vendor --</option>
              {vendors.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Item Needed:</label>
            <input type="text" placeholder="e.g., 5 extra microphones" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} required />
          </div>
          <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageVendors;