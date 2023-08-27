import React from 'react';
import { useForm } from 'react-hook-form';
import './AddArea.css';

const AddArea = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make an API request to send data to the backend
      const response = await fetch('your-backend-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        alert('Area added successfully!');
      } else {
        const responseData = await response.json();
        alert('Failed to add area: ' + responseData.error);
      }
    } catch (error) {
      console.error('Error adding area:', error);
    }
  };
//{errors.areaName && <p className="error-msg">{errors.areaName.message}</p>}
//{errors.numRacks && <p className="error-msg">{errors.numRacks.message}</p>}
// {errors.levelsPerRack && <p className="error-msg">{errors.levelsPerRack.message}</p>}
// {errors.levelHeight && <p className="error-msg">{errors.levelHeight.message}</p>}
// {errors.numBlocksPerLevel && <p className="error-msg">{errors.numBlocksPerLevel.message}</p>}
//{errors.blockLength && <p className="error-msg">{errors.blockLength.message}</p>}
//{errors.blockWidth && <p className="error-msg">{errors.blockWidth.message}</p>}
  return (
    <div className="add-area">
      <form className="add-area-form" onSubmit={handleSubmit(onSubmit)}>
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
            ref={register("numracks",{ required: 'Number of racks is required' })}
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
        <button type="submit" className="btn btn-primary">Add Area</button>
        <button type="button" className="btn btn-primary">Back</button>
      </form>
    </div>
  );
  
};

export default AddArea;