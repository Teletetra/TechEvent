import React from 'react';

const Dropdown = ({ label, id, options, value, onChange, placeholder = "-- Select --" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
      {label && (
        <label htmlFor={id} style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>
          {label}
        </label>
      )}
      <select 
        id={id} 
        value={value} 
        onChange={onChange}
        style={{ 
          padding: '10px', 
          fontSize: '16px', 
          borderRadius: '4px', 
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          cursor: 'pointer'
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          // option can be a simple string/number, or an object { value, label }
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;