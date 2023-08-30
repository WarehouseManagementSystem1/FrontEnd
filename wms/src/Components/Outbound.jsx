import React, { useState } from 'react';
import '../Css/Outbound.css'; 
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Outbound = () => {
  const [itemList, setItemList] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [itemid, setItemName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [role,setrole] = useState();
  var warehouseId = localStorage.getItem('warehouseid');
  
  useEffect(() => { 
    const usertype = localStorage.getItem('usertype');
    var warehouseId = localStorage.getItem('warehouseid');
    if(usertype === 'ADMIN')
    {
      setrole('/admin')
    }
    else if(usertype === 'USER')
    {
      setrole('/userdash');
    }
    
  }, []); 

  const handleGetItemList = async () => {
    try {
      const response = await fetch(`http://localhost:8080/item/allitemidandname/${warehouseId}`); 
      const data = await response.json();
      
      setItemList(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching item list:', error);
    }
  };
  console.log(itemid);
  const handleDelivery = async () => {
    try {
      console.log(warehouseId);
      const response = await fetch(`http://localhost:8080/item/outbound/${warehouseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemid }),
      });

      if (response.status===200) {
        const deliveryData = await response.json();
        setDeliveryInfo(deliveryData);
        setSuccessMessage('Item delivered successfully');
      } else {
        console.error('Failed to deliver item');
      }
    } catch (error) {
      console.error('Error delivering item:', error);
    }
  };

  return (
    <div className="outbound-container">
      <h1>Outbound Operation</h1>
      <button onClick={handleGetItemList}>Get Item List</button>
      <div className="item-list">
        <h2>Item List</h2>
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Item Units</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="delivery-form">
        <h2>Deliver Item</h2>
        <input
          type="text"
          placeholder="Enter Item id"
          value={itemid}
          
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={handleDelivery} disabled={!itemList.length || !itemid}>
          Deliver
        </button>
        <Link to ={role}><button>Back</button></Link>
        
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
      {deliveryInfo && (
        <div className="delivery-info">
          <h2>Delivery Information</h2>
          <table>
            <thead>
              <tr>
                <th>Area Name</th>
                <th>Rack Number</th>
                <th>Level Number</th>
                <th>Block Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{deliveryInfo.areaName}</td>
                <td>{deliveryInfo.rackNumber}</td>
                <td>{deliveryInfo.levelNumber}</td>
                <td>{deliveryInfo.blockNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Outbound;
