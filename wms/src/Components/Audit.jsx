import React, { useState } from 'react';
import '../Css/Audit.css';
import { Link } from 'react-router-dom';

function Audit() {
  const [warehouseId, setWarehouseId] = useState();
  const [itemId, setItemId] = useState();
  
  const [rackId, setRackId] = useState();
  const[areaId,setAreaId] = useState();
  const [blockId, setBlockId] = useState();
  const [levelId, setlevelId] = useState();
  const [itemOptions, setItemOptions] = useState([]);
  const [areaOptions, setAreaOptions] = useState([]);
  const [rackOptions, setRackOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);
  const [blockOptions, setBlockOptions] = useState([]);
  const [transferData, setTransferData] = useState(null);
  const [message, setMessage] = useState('');
  //console.log(localStorage.getItem('warehouseid'));
  const fetchItemOptions = async () => {
    // Fetch item options based on warehouseId
    // Use fetch API or axios to communicate with the backend

    const warehouseId = localStorage.getItem('warehouseid');
    // console.log(warehouseId);
    setWarehouseId(localStorage.getItem('warehouseid'));
    try {
      const response = await fetch(`http://localhost:8080/item/allitemidandname/${warehouseId}`, {
        method: 'GET',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
        },

      });
      const data = await response.json();
      //setItemId(data.id);
      console.log(data);
      setItemOptions(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Define similar functions to fetch area, rack, level, and block options
  const fetchAreaOptions = async () => {

    try {
      const warehouseId = localStorage.getItem('warehouseid');
      const response = await fetch(`http://localhost:8080/area/${warehouseId}`, {
        method: 'GET',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
        },

      });
      const data = await response.json();
      setAreaOptions(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRackOptions = async () => {
    try {
      const response = await fetch(`http://localhost:8080/rack/${areaId}`);
      const data = await response.json();
      //setRackId(data.id);
      setRackOptions(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchLevelOptions = async () => {
    try {
      const response = await fetch(`http://localhost:8080/level/${rackId}/${itemId}`);
      const data = await response.json();
      setlevelId(data.id);
      setLevelOptions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBlockOptions = async () => {
    try {
      const response = await fetch(`http://localhost:8080/block/${levelId}/${itemId}`);
      const data = await response.json();
      //setBlockId(data.id);
      setBlockOptions(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleTransfer = async () => {
    // Send transfer request to the backend
    const transferRequest = {
      itemId,
      blockId,
      levelId,
      rackId,
      areaId,
      warehouseId,
      
    };

    try {
      const response = await fetch('http://localhost:8080/item/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transferRequest),
      });

      const data = await response.json();
      setTransferData(data);
      console.log(data);
      setMessage('Transfer successful..!');
    } catch (error) {
      console.error(error);
      setMessage('Transfer failed');
    }
  };

  return (
    <div className="audit-container">
      <div>

        <button onClick={fetchItemOptions}>Audit</button>
      </div>
      <div>
        <select value={itemId} onChange={(e) => setItemId(e.target.value)}>
          <option value="">Select Item</option>
          {itemOptions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}&nbsp;{item.name}&nbsp;{item.units}
            </option>
          ))}
        </select>
        <button onClick={fetchAreaOptions}>Check</button>
        <div className="dropdown-section">
          <select value={areaId} onChange={(e) => setAreaId(e.target.value)}>
          <option value="">Select Item</option>
          {areaOptions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.areaname}&nbsp;{item.id}
            </option>
          ))}
          </select>
          <button onClick={fetchRackOptions}>Check</button>
        </div>
      </div>
      

      <div className="dropdown-section">
        <select value={rackId} onChange={(e) => setRackId(e.target.value)}>
          <option value="">Select Rack</option>
          {rackOptions.map((rack) => (
            <option key={rack.id} value={rack.id}>
              {rack.id}&nbsp;{rack.number}
            </option>
          ))}
        </select>
        <button onClick={fetchLevelOptions}>Check</button>
      </div>

      <div className="dropdown-section">
        <select value={levelId} onChange={(e) => setlevelId(e.target.value)}>
          <option value="">Select Level</option>
          {levelOptions.map((level) => (
            <option key={level.id} value={level.id}>
              {level.id}&nbsp;{level.levelnumber}
            </option>
          ))}
        </select>
        <button onClick={fetchBlockOptions}>Check</button>
      </div>

      <div className="dropdown-section">
        <select value={blockId} onChange={(e) => setBlockId(e.target.value)}>
          <option value="">Select Block</option>
          {blockOptions.map((block) => (
            <option key={block.id} value={block.id}>
              {block.id}&nbsp;{block.blockNumber}
            </option>
          ))}
        </select>
        <button onClick={handleTransfer}>Transfer</button>
      </div>

      {/* Implement other dropdowns and buttons similarly */}

      <div>
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Area Name</th>
              <th>Rack Number</th>
              <th>Level Number</th>
              <th>Block Number</th>
              
              
              
            </tr>
          </thead>
          <tbody>
          {transferData && (
      <tr>
        <td>{transferData.itemId}</td>
        <td>{transferData.itemName}</td>
        <td>{transferData.areaName}</td>
        <td>{transferData.rackNumber}</td>
        <td>{transferData.levelNumber}</td>
        <td>{transferData.blockNumber}</td>
      </tr>
    )}
          </tbody>
        </table>
        <p>{message}</p>
      </div>
      <Link to='/auditdash'> <button type="button" class="btn" >Back</button></Link>
    </div>
  );
}

export default Audit;