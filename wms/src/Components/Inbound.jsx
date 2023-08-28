import React from 'react';
import { useForm } from 'react-hook-form';
import './Inbound.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Inbound = () => {
  const [areaName, setAreaName] = useState('');
  const [rackNumber, setRackNumber] = useState('');
  const [levelNumber, setLevelNumber] = useState('');
  const [blockNumber, setBlockNumber] = useState('');
  const  [enable,setEnable] = useState(false);
  const { register,errors,watch } = useForm();
          const itemName = watch('itemname');
          const unitsInItem  = watch('units');
          const itemLength = watch('itemlength');
          const itemHeight = watch('itemheight');
          const itemWidth = watch('itemwidth');
;          const warehouseId = localStorage.getItem('warehouseid')
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to handle inbound data and provide area/rack/level/block info
    const apiUrl = `https://your-backend-api.com/inbound${warehouseId}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName,
          unitsInItem,
          itemLength,
          itemHeight,
          itemWidth,
          
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const { areaName, rackNumber, levelNumber, blockNumber } = responseData;

        setAreaName(areaName);
        setRackNumber(rackNumber);
        setLevelNumber(levelNumber);
        setBlockNumber(blockNumber);

        console.log('Data sent and received successfully:', responseData);
        setEnable(true);
      } else {
        console.error('Error receiving data:', response.statusText);
        setEnable(false);
      }
    } catch (error) {
      console.error('Error sending or receiving data:', error);
    }

  
  };
  //{errors.itemName && <p className="error-msg">{errors.itemName.message}</p>}
  //{errors.units && <p className="error-msg">{errors.units.message}</p>}
  //{errors.itemLength && <p className="error-msg">{errors.itemLength.message}</p>}
  // {errors.itemHeight && <p className="error-msg">{errors.itemHeight.message}</p>}
  //{errors.itemWidth && <p className="error-msg">{errors.itemWidth.message}</p>}
  return (
    <div className="inbound">
      <form className="inbound-form" onSubmit={handleSubmit}>
        <h2>Inbound Item</h2>
        <div className="form-group">
          <input
            type="text"
            name="itemname"
            id="itemname"
            placeholder="Item Name"
            {...register("itemname",{ required: 'Item name is required' })}
          />
          
        </div>
        <div className="form-group">
          <input
            type="number"
            name="units"
            id="units"
            placeholder="Units in Item"
            {...register("units",{ required: 'Units are required', min: 1 })}
          />
          
        </div>
        <div className="form-group">
          <input
            type="number"
            name="itemlength"
            id="itemlength"
            placeholder="Item Length"
            {...register("itemlength",{ required: 'Item length is required', min: 0 })}
          />
          
        </div>
        <div className="form-group">
          <input
            type="number"
            name="itemheight"
            id="itemheight"
            placeholder="Item Height"
            {...register("itemheight",{ required: 'Item height is required', min: 0 })}
          />
         
        </div>
        <div className="form-group">
          <input
            type="number"
            name="itemwidth"
            id='itemwidth'
            placeholder="Item Width"
            {...register("itemwidth",{ required: 'Item width is required', min: 0 })}
          />
          
        </div>
         <button type="submit" className="btn btn-primary">Check</button>
        {enable?<button type="submit" className="btn btn-primary">Submit</button>:<button type="submit" className="btn btn-primary" disabled>Submit</button>}
        <Link to='/admin'> <button type="button" class="btn" >Back</button></Link>
      </form>
    </div>
  );
};

export default Inbound;