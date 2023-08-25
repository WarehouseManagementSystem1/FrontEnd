import React, { useState } from 'react';
import './Inbound.css'; // Import the CSS file for styling

function Inbound() {
  const [itemId, setItemId] = useState('');
  const [units, setUnits] = useState('');
  const [unitLength, setUnitLength] = useState('');
  const [unitWidth, setUnitWidth] = useState('');
  const [unitHeight, setUnitHeight] = useState('');
  const [blockId, setBlockId] = useState('');
  const [levelId, setLevelId] = useState('');
  const [rackId, setRackId] = useState('');
  const [areaId, setAreaId] = useState('');
  const [warehouseId, setWarehouseId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!e.target.checkValidity()) {
      alert('Please fill out all fields correctly');
      return;
    }

    // Mock API request (replace with actual API endpoint)
    try {
      const response = await fetch('API_ENDPOINT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId,
          units,
          unitLength,
          unitWidth,
          unitHeight,
          blockId,
          levelId,
          rackId,
          areaId,
          warehouseId,
        }),
      });

      if (response.ok) {
        alert('Inbound data submitted successfully');
      } else {
        alert('Failed to submit inbound data');
      }
    } catch (error) {
      alert('An error occurred while submitting data');
    }
  };

  return (
    <div className="inbound-container">
      <h1>Inbound</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Item ID:</label>
          <input
            type="text"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
            required
            minLength="2"
          />
        </div>
        <div className="input-group">
          <label>Units:</label>
          <input
            type="number"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            required
            min="1"
          />
        </div>
        <div className="input-group">
          <label>Unit Length:</label>
          <input
            type="number"
            value={unitLength}
            onChange={(e) => setUnitLength(e.target.value)}
            required
            min="1"
          />
        </div>
        <div className="input-group">
          <label>Unit Width:</label>
          <input
            type="number"
            value={unitWidth}
            onChange={(e) => setUnitWidth(e.target.value)}
            required
            min="1"
          />
        </div>
        <div className="input-group">
          <label>Unit Height:</label>
          <input
            type="number"
            value={unitHeight}
            onChange={(e) => setUnitHeight(e.target.value)}
            required
            min="1"
          />
        </div>
        <div className="input-group">
          <label>Block ID:</label>
          <input
            type="text"
            value={blockId}
            onChange={(e) => setBlockId(e.target.value)}
            required
            minLength="2"
          />
        </div>
        <div className="input-group">
          <label>Level ID:</label>
          <input
            type="text"
            value={levelId}
            onChange={(e) => setLevelId(e.target.value)}
            required
            minLength="2"
          />
        </div>
        <div className="input-group">
          <label>Rack ID:</label>
          <input
            type="text"
            value={rackId}
            onChange={(e) => setRackId(e.target.value)}
            required
            minLength="2"
          />
        </div>
        <div className="input-group">
          <label>Area ID:</label>
          <input
            type="text"
            value={areaId}
            onChange={(e) => setAreaId(e.target.value)}
            required
            minLength="2"
          />
        </div>
        <div className="input-group">
          <label>Warehouse ID:</label>
          <input
            type="text"
            value={warehouseId}
            onChange={(e) => setWarehouseId(e.target.value)}
            required
            minLength="2"
          />
        </div>
        <button className="submit-button" type="submit">
          Submit Inbound
        </button>
      </form>
    </div>
  );
}

export default Inbound;
