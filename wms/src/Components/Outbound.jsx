import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Outbound.css';
import { Link } from 'react-router-dom';
const Outbound = () => {
  const { register, handleSubmit, errors } = useForm();
  const [outboundData, setOutboundData] = useState([]);

  const onSubmit = async ({ itemname }) => {
    try {
      // Make an API request to send outbound item data to the backend
      const response = await fetch('your-backend-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemname }),
      });

      if (response.ok) {
        const data = await response.json();
        setOutboundData(data);
      } else {
        const responseData = await response.json();
        alert('Failed to deliver item: ' + responseData.error);
      }
    } catch (error) {
      console.error('Error delivering item:', error);
    }
  };
  //{errors.itemname && <p className="error-msg">{errors.itemname.message}</p>}
  return (
    <div className="outbound">
      <form className="outbound-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Outbound Item</h2>
        <div className="form-group">
          <input
            type="text"
            name="itemname"
            id="itemname"
            placeholder="Item Name"
            {...register("itemname",{ required: 'Item name is required' })}
          />
          
        </div>
        <button type="submit" className="btn btn-primary">Deliver</button>
        <Link to='/admin'> <button type="button" class="btn" >Back</button></Link>
      </form>

      {outboundData.length > 0 && (
        <div className="outbound-details">
          <h3>Outbound Details</h3>
          <ul>
            {outboundData.map((item) => (
              <li key={item.unit}>
                Unit: {item.unit}, Area Name: {item.areaName}, Rack Number: {item.rackNumber},
                Level Number: {item.levelNumber}, Block Number: {item.blockNumber}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Outbound;