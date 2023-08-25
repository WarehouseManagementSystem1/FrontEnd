import React, { useState } from 'react';


function Outbound() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Custom validation: Check if item name contains only letters and spaces
    const itemNamePattern = /^[A-Za-z\s]+$/;
    if (!itemNamePattern.test(itemName)) {
      alert('Please enter a valid item name (letters and spaces only).');
      return;
    }

    // Basic form validation
    if (!itemName || !itemQuantity || isNaN(itemQuantity) || itemQuantity <= 0) {
      alert('Please fill out both valid Item Name and a positive Item Quantity.');
      return;
    }

    // Mock API request (replace with actual API endpoint)
    try {
      // Simulate successful API response
      alert(`Item ${itemName} with quantity ${itemQuantity} outbound processed successfully.`);
      setItemName('');
      setItemQuantity('');
      form.reset();
    } catch (error) {
      alert('An error occurred while processing outbound.');
    }
  };

  return (
    <div className="outbound-container">
      <h1>Outbound</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Item Quantity:</label>
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            required
            min="1"
          />
        </div>
        <button className="submit-button" type="submit">
          Process Outbound
        </button>
      </form>
    </div>
  );
}

export default Outbound;
