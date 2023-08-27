import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddWarehouse.css';
import AddArea from './AddArea';
import { Link } from 'react-router-dom';
const AddWarehouse = () => {
  const { register, handleSubmit, errors } = useForm();
  const [warehouseAdded, setWarehouseAdded] = useState(false);

  const onSubmit = (data) => {
    setWarehouseAdded(true);
  };
  //{errors.warehouseaddress && <p className="error-msg">{errors.warehouseaddress.message}</p>}
  //{errors.warehousename && <p className="error-msg">{errors.warehousename.message}</p>}
  return (
    <div className="add-warehouse">
      {!warehouseAdded ? (
        <form className="add-warehouse-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Warehouse</h2>
          <div className="form-group">
            <input
              type="text"
              name="warehousename"
              id='warehousename'
              placeholder="Warehouse Name"
              {...register("warehousename",{ required: 'Warehouse name is required' })}
            />
            
          </div>
          <div className="form-group">
            <input
              type="text"
              name="warehouseaddress"
              id='warehouseaddress'
              placeholder="Warehouse Address"
              {...register("warehouseaddress",{ required: 'Warehouse address is required' })}
            />
            
          </div>
          <button type="submit" className="btn btn-primary">Add Warehouse</button>
          <Link to='/admin'> <button type="button" class="btn" >Back</button></Link>
        </form>
      ) : (
        <AddArea />
      )}
    </div>
  );
};

export default AddWarehouse;