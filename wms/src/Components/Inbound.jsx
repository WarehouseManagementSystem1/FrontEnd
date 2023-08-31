import React from 'react';
import { useForm } from 'react-hook-form';
import '../Css/Inbound.css';


import { Link } from 'react-router-dom';
import { useState } from 'react';

const Inbound = () => {
  const[itemid,setitemid] = useState('');
  const [areaName, setAreaName] = useState('');
  const [rackNumber, setRackNumber] = useState('');
  const [levelNumber, setLevelNumber] = useState('');
  const [blockNumber, setBlockNumber] = useState('');
  const  [enable,setEnable] = useState(false);
  const [back,setback] = useState('');
  const[check,setcheck] = useState(false);
  const[add,setadd] = useState(false);
  const[msg,setmsg] = useState('');
  const { register,watch,formState } = useForm({mode:"all"});
  const { errors, isSubmitting, isSubmitted, isSubmitSuccessful,reset } = formState;
  const itemName = watch('itemname');
  const unitsInItem  = watch('units');
  const itemLength = watch('itemlength');
  const itemHeight = watch('itemheight');
  const itemWidth = watch('itemwidth');
 const warehouseId = localStorage.getItem('warehouseid')

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemName || !unitsInItem || !itemLength || !itemHeight || !itemWidth) {
      setmsg("Please fill in all the required fields");
      setcheck(false);
      setEnable(false);
      return; 
    }
    const usertype = localStorage.getItem('usertype');
    if(usertype === "ADMIN")
    {
      setback('/admin');
    }
    else
    {
      setback('/userdash');
    }
    const apiUrl = `http://localhost:8080/item/inbound/check/${warehouseId}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        mode : 'cors',
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          itemName,
          unitsInItem,
          itemLength,
          itemHeight,
          itemWidth,
          
        }),
      });

      if (response.status===200) {
        console.log('Data verified successfully');
        setmsg("Data verified successfully");
        setcheck(true);
        setEnable(true);
      } else {
        console.error('Error verifying data:', response.statusText);
        setmsg("Error verifying data");
        setEnable(false);
      }
    } catch (error) {
      console.error('Error verifying data:', error);
    }
    
    
  
  };
  var submitData = async(e)=>{
    const apiUrl = `http://localhost:8080/item/inbound/checked/${warehouseId}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      mode:'cors',
      crossDomain: true,
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
      const {itemid, areaName, rackNumber, levelNumber, blockNumber } = responseData;
      setitemid(itemid);
      setAreaName(areaName);
      setRackNumber(rackNumber);
      setLevelNumber(levelNumber);
      setBlockNumber(blockNumber);

      console.log('Data sent and received successfully:', responseData);
      setmsg('Data sent successfully');
      setEnable(true);
    } else {
      console.error('Error receiving data:', response.statusText);
      setEnable(false);
    }
  } catch (error) {
    console.error('Error sending or receiving data:', error);
  }


    

  }

  
  return (
    <div className="inbound">
      <form className="inbound-form" onSubmit={handleSubmit}>
        <h2>Inbound Item</h2>
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            name="itemname"
            id="itemname"
            placeholder="Item Name"
            {...register("itemname",{ required: 'Item name is required' })}
          />
           {errors.itemname && <p className="error-msg">{errors.itemname.message}</p>}
        </div>
        <div className="form-group">
           <label>Units</label>
          <input
            type="number"
            name="units"
            id="units"
            placeholder="Units in Item"
            {...register("units",{ required: 'Units are required', pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            }, })}
          />
          {errors.units && <p className="error-msg">{errors.units.message}</p>}
        </div>
        <div className="form-group">
          <label>Item length</label>
          <input
            type="number"
            name="itemlength"
            id="itemlength"
            placeholder="Item Length"
            {...register("itemlength",{ required: 'Item length is required', pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            },  })}
          />
        {errors.itemlength && <p className="error-msg">{errors.itemlength.message}</p>}  
        </div>
        <div className="form-group">
          <label>Item Height</label>
          <input
            type="number"
            name="itemheight"
            id="itemheight"
            placeholder="Item Height"
            {...register("itemheight",{ required: 'Item height is required', pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            }, })}
          />
        {errors.itemheight && <p className="error-msg">{errors.itemheight.message}</p>}  
        </div>
        <div className="form-group">
          <label>Item Width</label>
          <input
            type="number"
            name="itemwidth"
            id='itemwidth'
            placeholder="Item Width"
            {...register("itemwidth",{ required: 'Item width is required', pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            }, })}
          />
        {errors.itemWidth && <p className="error-msg">{errors.itemwidth.message}</p>}  
        </div>
         <button type="submit" className="btn btn-primary">Check</button>
        {enable?<button type="submit" className="btn btn-primary" onClick={()=>submitData()}>Submit</button>:<button type="submit" className="btn btn-primary" disabled>Submit</button>}
        <Link to={ back }> <button type="button" class="btn" >Back</button></Link>
        {
          <div>
            <p>
              {msg}
            </p>
          </div>
        }
        </form>
    </div>
  );
};

export default Inbound;