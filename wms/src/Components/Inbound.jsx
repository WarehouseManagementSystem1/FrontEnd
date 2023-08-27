import React from 'react';
import { useForm } from 'react-hook-form';
import './Inbound.css';
import { Link } from 'react-router-dom';

const Inbound = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make an API request to send inbound item data to the backend
      const response = await fetch('your-backend-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Inbound item added successfully!');
      } else {
        const responseData = await response.json();
        alert('Failed to add inbound item: ' + responseData.error);
      }
    } catch (error) {
      console.error('Error adding inbound item:', error);
    }
  };
  //{errors.itemName && <p className="error-msg">{errors.itemName.message}</p>}
  //{errors.units && <p className="error-msg">{errors.units.message}</p>}
  //{errors.itemLength && <p className="error-msg">{errors.itemLength.message}</p>}
  // {errors.itemHeight && <p className="error-msg">{errors.itemHeight.message}</p>}
  //{errors.itemWidth && <p className="error-msg">{errors.itemWidth.message}</p>}
  return (
    <div className="inbound">
      <form className="inbound-form" onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/admin'> <button type="button" class="btn" >Back</button></Link>
      </form>
    </div>
  );
};

export default Inbound;