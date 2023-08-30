import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Css/AddWarehouse.css';
import AddArea from './AddArea';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Warehouse = () => {
  const { register, errors, watch } = useForm();
  const [sucess, setsucess] = useState(false);
  const [enable, setenable] = useState(false);
  useEffect(() => {
    const warehouseid = localStorage.getItem('warehouseid');

    if (warehouseid > 0) {
      setenable(true);
    }
    else {
      setenable(false);
    }



  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const warehousename = watch('warehouseName');
    const warehouseaddress = watch('warehouseAddress');
    const ownerId = localStorage.getItem('ownerid');
    console.log(ownerId);
    console.log(warehousename);
    try {
      // Send data to server and receive warehouseId const url = `http://localhost:8080/warehouse/addwarehouse/${ownerId}`
      const response = await fetch(`http://localhost:8080/warehouse/addwarehouse/${ownerId}`, {
        method: 'POST',
        mode: "cors",
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ warehousename, warehouseaddress }),
      });
      if (response.ok) {
        try {
          const data = await response.json();
          console.log('Response data:', data);
          setsucess(true);
          localStorage.setItem('warehouseid', data.warehouseid);
        } catch (error) {
          console.error('Error parsing response JSON:', error);
          alert('Error adding warehouse');
          setsucess(false);
        }
      } else {
        console.error('Request failed with status:', response.status);
      }

      
      
      
    } catch (error) {
      console.error('Error adding warehouse:', error);
      
    }
    e.target.reset();


  }

  return (
    <div className="add-warehouse">

      {sucess ? (<AddArea />) :
        (<form className="add-warehouse-form" onSubmit={handleSubmit}>
          <h2>Add Warehouse</h2>
          <div className="form-group">
            <input
              type="text"
              name="warehouseName"
              placeholder="Warehouse Name"
              {...register("warehouseName", { required: 'Warehouse name is required' })}
            />

          </div>
          <div className="form-group">
            <input
              type="text"
              name="warehouseAddress"
              placeholder="Warehouse Address"
              {...register("warehouseAddress", { required: 'Warehouse address is required' })}
            />

          </div>
          <button type="submit" className="btn btn-primary">Add Warehouse</button>
         
          <Link to='/admin'> <button type="button" class="btn" >Back</button></Link>
        </form>)}
    </div>
  );

};

export default Warehouse;