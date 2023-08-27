

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ViewInventory.css';

const ViewInventory = () => {
  const { register, handleSubmit, errors } = useForm();
  const [inventoryData, setInventoryData] = useState([]);

  const onSubmit = async ({ warehouseId }) => {
    try {
      // Make an API request to fetch inventory data
      const response = await fetch(`your-backend-api-url/${warehouseId}`);
      const data = await response.json();
      setInventoryData(data);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };

  return (
    <div className="view-inventory">
      <form className="view-inventory-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>View Inventory</h2>
        <div className="form-group">
          <input
            type="number"
            name="warehouseId"
            placeholder="Warehouse ID"
            ref={register({ required: 'Warehouse ID is required' })}
          />
          {errors.warehouseId && <p className="error-msg">{errors.warehouseId.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Fetch Inventory</button>
      </form>

      {inventoryData.length > 0 && (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Units</th>
              <th>Area Name</th>
              <th>Rack Number</th>
              <th>Level Number</th>
              <th>Block Number</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.itemId}>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.units}</td>
                <td>{item.areaName}</td>
                <td>{item.rackNumber}</td>
                <td>{item.levelNumber}</td>
                <td>{item.blockNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewInventory;