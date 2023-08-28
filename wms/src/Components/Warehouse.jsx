import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Css/AddWarehouse.css';
import AddArea from './AddArea';

const Warehouse = () => {
  const { register, errors,watch } = useForm();
  const [sucess,setsucess] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const warehousename = watch('warehouseName');
    const warehouseaddress = watch('warehouseAddress');
    const ownerId = localStorage.getItem('ownerId');
    console.log(warehousename);
    try {
        // Send data to server and receive warehouseId
        const response = await fetch('/api/addWarehouse?ownerId=${ownerId}', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({warehousename,warehouseaddress}),
        });
  
        const data = await response.json();
        localStorage.setItem('warehouseid', data.warehouseid);
        setsucess(true);
      } catch (error) {
        console.error('Error adding warehouse:', error);
        alert('Error adding warehouse');
        setsucess(false);
      }
    e.target.reset();


  }

  return (
    <div className="add-warehouse">

      {sucess ?(<AddArea />):
       (<form className="add-warehouse-form" onSubmit={handleSubmit}>
          <h2>Add Warehouse</h2>
          <div className="form-group">
            <input
              type="text"
              name="warehouseName"
              placeholder="Warehouse Name"
              {...register("warehouseName",{ required: 'Warehouse name is required' })}
            />
            
          </div>
          <div className="form-group">
            <input
              type="text"
              name="warehouseAddress"
              placeholder="Warehouse Address"
              {...register("warehouseAddress",{ required: 'Warehouse address is required' })}
            />
            
          </div>
          <button type="submit" className="btn btn-primary">Add Warehouse</button>
        </form>)}
      </div>
  );
  
};

export default Warehouse;