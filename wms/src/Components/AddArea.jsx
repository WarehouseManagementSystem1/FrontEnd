import React from 'react';
import { useForm } from 'react-hook-form';
import './AddArea.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddArea = () => {
  const { register,watch,reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preeventDafult();
    e.target.reset();
    const areaname = watch('areaname');
    const numracks = watch('numracks');
    const numLevelsperrack = watch('numLevelsperrack');
    const levelheight = watch('levelheight');
    const numblocksperlevel = watch('numblocksperlevel');
    const blocklength = watch('blocklength');
    const blockwidth = watch('blockwidth');
    const warehouseid = localStorage.getItem('warehouseid');

    try {
      const areaData = {
        areaname,
        numracks,
        numLevelsperrack,
        levelheight,
        numblocksperlevel,
        blocklength,
        blockwidth,
        
      };

      // Send area data to server and receive response
      const response = await fetch(`/api/addArea?warehouseId=${warehouseid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(areaData),
      });

      const responseData = await response.json();
      if (responseData.success) {
        setSuccessMessage('Area added successfully!');
      } else {
        setSuccessMessage('Error adding area. Please try again.');
      }
    } catch (error) {
      console.error('Error adding area:', error);
      setSuccessMessage('Error adding area. Please try again.');
    }

  }
  
  
  return (
    <div className="add-area">
      <form className="add-area-form" onSubmit={handleSubmit}>
        <h2>Congratulations for your Warehouse Registration! Now Add Area</h2>
        <div className="form-group">
          <input
            type="text"
            name="areaname"
            id="areaname"
            placeholder="Area Name"
            {...register("areaname",{ required: 'Area name is required' })}
          />
          
        </div>
        <div className="form-group">
          <input
            type="number"
            name="numracks"
            id="numracks"
            placeholder="Number of Racks"
            {...register("numracks",{ required: 'Number of racks is required' })}
          />
          
        </div>
        <div className="form-group">
          <input
            type="number"
            name="levelsperrack"
            id="levelsperrack"
            placeholder="Number of Levels per Rack"
            {...register("levelsperrack",{ required: 'Number of levels per rack is required' })}
          />
         
        </div>
        <div className="form-group">
          <input
            type="number"
            name="levelheight"
            id="levelheight"

            placeholder="Height of Each Level (in cm)"
            {...register("levelheight",{ required: 'Height of each level is required' })}
          />
         
        </div>
        <div className="form-group">
          <input
            type="number"
            name="numblocksperlevel"
            id="numblocksperlevel"
            placeholder="Number of Blocks per Level"
            {...register("numblocksperlevel",{ required: 'Number of blocks per level is required' })}
          />
         
        </div>
        <div className="form-group">
          <input
            type="number"
            name="blocklength"
            id="blocklength"
            placeholder="Length of Each Block (in cm)"
            {...register("blocklength",{ required: 'Length of each block is required' })}
          />
          
        </div>
        <div className="form-group">
          <input
            type="number"
            name="blockwidth"
            id="blockwidth"
            placeholder="Width of Each Block (in cm)"
            {...register("blockwidth",{ required: 'Width of each block is required' })}
          />
          
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Add Area</button>
        <button type="button" className="btn btn-primary"> <Link to='/admin'>Auditor</Link></button>
      </form>
    </div>
  );
  
};

export default AddArea;