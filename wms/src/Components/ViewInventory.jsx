import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Css/ViewInventory.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const ViewInventory = () => {
   const { register, handleSubmit, errors } = useForm();
   const [inventoryData, setInventoryData] = useState([]);
   const[backlink,setblanklink] = useState();
   
   
   var usertype = localStorage.getItem('usertype');
   const warehouseid = localStorage.getItem('warehouseid');
   console.log(usertype);
   useEffect(() => { 
    if(usertype === 'ADMIN')
    {
      //backlink = '/admin';
      setblanklink('/admin')
    }
    else if(usertype === 'USER')
    {
      //backlink ='/userdash';
      setblanklink('/userdash');
    }
    else
    {
      //backlink = '/auditdash';
      setblanklink('/auditdash');
    }

   
    }, []); 
  const onSubmit = async () => {
    try {
      const warehouseid = localStorage.getItem('warehouseid');
      console.log(warehouseid);
      
      // Make an API request to fetch inventory data
      const response = await fetch(`http://localhost:8080/item/allitem/${warehouseid}`);
      const data = await response.json();
      setInventoryData(data);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
    
    
  };
  

  return (
    <div className="view-inventory">
      <form className="view-inventory-form" onSubmit={handleSubmit(onSubmit)}>
        
        <button type="submit" className="btn btn-primary" onSubmit={()=>handleSubmit()}>Fetch Inventory</button>
        <Link to={ backlink }><button type="button" className="btn btn-primary" >Back</button></Link>
        
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
