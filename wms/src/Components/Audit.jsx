import React, { useState } from 'react';
import './Audit.css'; // Import the CSS file for styling

function Audit() {
  const [itemName, setItemName] = useState('');
  const [areaId, setAreaId] = useState('');
  const [rackId, setRackId] = useState('');
  const [levelId, setLevelId] = useState('');
  const [blockId, setBlockId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom validation: Check if item name contains only letters and spaces
    const itemNamePattern = /^[A-Za-z\s]+$/;
    if (!itemNamePattern.test(itemName)) {
      alert('Please enter a valid item name (letters and spaces only).');
      return;
    }

    // Basic form validation
    if (!itemName || !areaId || !rackId || !levelId || !blockId) {
      alert('Please fill out all fields.');
      return;
    }

    // Prepare data to send in the request body
    const auditData = {
      itemName,
      areaId,
      rackId,
      levelId,
      blockId,
    };

    // Replace with your actual API endpoint URL
    const apiEndpoint = 'YOUR_API_ENDPOINT_URL';

    try {
      // Send the audit request to the API
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auditData),
      });

      if (response.ok) {
        // Simulate successful API response
        alert(`Audit for ${itemName} processed successfully.`);
        setItemName('');
        setAreaId('');
        setRackId('');
        setLevelId('');
        setBlockId('');
      } else {
        // Handle unsuccessful response
        alert('Failed to process audit.');
      }
    } catch (error) {
      alert('An error occurred while processing audit.');
    }
  };

  return (
    <div className="audit-container">
      <h1>Audit</h1>
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
          <label>Area ID:</label>
          <input
            type="text"
            value={areaId}
            onChange={(e) => setAreaId(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Rack ID:</label>
          <input
            type="text"
            value={rackId}
            onChange={(e) => setRackId(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Level ID:</label>
          <input
            type="text"
            value={levelId}
            onChange={(e) => setLevelId(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Block ID:</label>
          <input
            type="text"
            value={blockId}
            onChange={(e) => setBlockId(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Process Audit
        </button>
      </form>
    </div>
  );
}

export default Audit;