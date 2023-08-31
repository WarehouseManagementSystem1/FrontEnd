import React from 'react';
import { useForm } from 'react-hook-form';
import '../Css/AddArea.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

const AddArea = () => {
  const { register,watch,reset,formState } = useForm({"mode":"all"});
  const { errors, isSubmitting, isSubmitted, isSubmitSuccessful } = formState;
  const [successMessage, setSuccessMessage] = useState('');
  const[redirect,setredirect] = useState(false);
  const[error,seterror] = useState(false);
  const[error1,seterror1] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const areaname = watch('areaname');
    const numracks = watch('numracks');
    const numLevelsperrack = watch('levelsperrack');
    const levelheight = watch('levelheight');
    const numblocksperlevel = watch('numblocksperlevel');
    const blocklength = watch('blocklength');
    const blockwidth = watch('blockwidth');
    const warehouseid = localStorage.getItem('warehouseid');
    if(areaname === '' || numracks==='' || numLevelsperrack===" " || levelheight==='' || numblocksperlevel==='' || blocklength==='' || blockwidth==='')
    {
      console.log('ajit');
      seterror(true);
      seterror1(false)
      e.preventDefault();
      alert("Please Fill Data CareFully");
    }
    else
    {
     seterror1(true);
     seterror(false)
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
        const response = await fetch(`http://localhost:8080/area/addarea/${warehouseid}`, {
          method: 'POST',
          mode:'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(areaData),
        });
  
        const responseData = await response.json();
        if (responseData.success) {
          setSuccessMessage('Area added successfully!');
          setredirect(true);
        } else {
          setSuccessMessage('Error adding area. Please try again.');
        }
      } catch (error) {
        console.error('Error adding area:', error);
        setSuccessMessage('Error adding area. Please try again.');
      }
      e.target.reset();
    }

  }
  
  
  return (

    <>
    {redirect?<AdminDashboard />:
    (
    <div className="add-area">
      <form className="add-area-form" onSubmit={handleSubmit}>
        <div className='info'>
          <p>
            Owner Name:{localStorage.getItem('firstname')}<br></br>
            Owner Id:{localStorage.getItem('ownerid')}<br></br>
            WareHouse Id:{localStorage.getItem('warehouseid')}
          </p>
        </div>
        <hr></hr>
        <div className="form-group">
          <label>AreaName</label>
          <input
            type="text"
            name="areaname"
            id="areaname"
            placeholder="Area Name"
            {...register("areaname",{ required: 'Area name is required' })}
          />
          {errors.areaname && <p className="error-msg">{errors.areaname.message}</p>}
        </div>
        <div className="form-group">
          <label>Number Of Racks</label>
          <input
            type="number"
            name="numracks"
            id="numracks"
            placeholder="Number of Racks"
            {...register("numracks",{ required: 'Number of racks is required', pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            }, })}
          />
        {errors.numracks && <p className="error-msg">{errors.numracks.message}</p>}
        </div>
        <div className="form-group">
          <label>Level Per Rack</label>
          <input
            type="number"
            name="levelsperrack"
            id="levelsperrack"
            placeholder="Number of Levels per Rack"
            {...register("levelsperrack",{ required: 'Number of levels per rack is required' ,pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            },  })}
          />
         {errors.levelsperrack && <p className="error-msg">{errors.levelsperrack.message}</p>}
        </div>
        <div className="form-group">
          <label>LevelHeight</label>
          <input
            type="number"
            name="levelheight"
            id="levelheight"

            placeholder="Height of Each Level (in cm)"
            {...register("levelheight",{ required: 'Height of each level is required' , pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            },})}
          />
         {errors.levelheight && <p className="error-msg">{errors.levelheight.message}</p>}
        </div>
        <div className="form-group">
          <label>Number Of Block Per Level</label>
          <input
            type="number"
            name="numblocksperlevel"
            id="numblocksperlevel"
            placeholder="Number of Blocks per Level"
            {...register("numblocksperlevel",{ required: 'Number of blocks per level is required' ,  pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            }, })}
          />
        {errors.numblocksperlevel && <p className="error-msg">{errors.numblocksperlevel.message}</p>}
        </div>
        <div className="form-group">
          <label>Block Length</label>
          <input
            type="number"
            name="blocklength"
            id="blocklength"
            placeholder="Length of Each Block (in cm)"
            {...register("blocklength",{ required: 'Length of each block is required' ,pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            }, })}
          />
        {errors.blocklength && <p className="error-msg">{errors.blocklength.message}</p>}
        </div>
        <div className="form-group">
          <label>Block Width</label>
          <input
            type="number"
            name="blockwidth"
            id="blockwidth"
            placeholder="Width of Each Block (in cm)"
            {...register("blockwidth",{ required: 'Width of each block is required' ,pattern: {
              value: /^[+]?\d*\.?\d+$/,
              message: 'Please enter a valid positive number',
            },})}
          />
         {errors.blockwidth && <p className="error-msg">{errors.blockwidth.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Add Area</button>
        <Link to='/admin'><button type="button" className="btn btn-primary"> Back</button></Link>
        <center>{error ?
      <div>
        <p className='msg'>Please Fill all field Correcrtly</p>
      </div>:<div></div>
      }</center>
      <center>{error1 ?
      <div>
        <p className='msg1'>Area Added SucessFully</p>
      </div>:<div></div>
      }</center>
      </form>
      
    </div>)}
    
      </>
  );
  
};

export default AddArea;