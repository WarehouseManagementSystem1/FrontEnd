import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../Css/Audit.css';
import { Link } from 'react-router-dom';


const Audit = () => {
  const { register, handleSubmit, setValue, watch, errors } = useForm();
  const [items, setItems] = useState([]);
  const [areas, setAreas] = useState([]);
  const [racks, setRacks] = useState([]);
  const [levels, setLevels] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const selectedItemId = watch('selectedItem');
  const selectedAreaId = watch('selectedArea');
  const selectedRackId = watch('selectedRack');
  const selectedLevelId = watch('selectedLevel');

  useEffect(() => {
    // Fetch items list from the backend
    const fetchItems = async () => {
      try {
        const response = await fetch('your-items-api-url');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const onSubmit = async (data) => {
    try {
      // Make an API request to send audit data to the backend
      const response = await fetch('your-backend-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Audit data submitted successfully!');
      } else {
        const responseData = await response.json();
        alert('Failed to submit audit data: ' + responseData.error);
      }
    } catch (error) {
      console.error('Error submitting audit data:', error);
    }
    //{errors.selectedItem && <p className="error-msg">{errors.selectedItem.message}</p>}
    // {errors.selectedArea && <p className="error-msg">{errors.selectedArea.message}</p>}
    //{errors.selectedArea && <p className="error-msg">{errors.selectedArea.message}</p>}
    //{errors.selectedRack && <p className="error-msg">{errors.selectedRack.message}</p>}
    //{errors.selectedLevel && <p className="error-msg">{errors.selectedLevel.message}</p>}
    //{errors.selectedBlock && <p className="error-msg">{errors.selectedBlock.message}</p>}
  };

  return (
    <div className="audit">
      <form className="audit-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Audit</h2>
        <div className="form-group">
          <select name="selectedItem" {...register("selectedItem",{ required: 'Item selection is required' })}>
            <option value="">Select Item</option>
            {items.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.itemName}
              </option>
            ))}
          </select>
          
        </div>

        {selectedItemId && (
          <div className="form-group">
            <select name="selectedArea" {...register("selectedArea",{ required: 'Area selection is required' })}>
              <option value="">Select Area</option>
              {/* Fetch and populate areas based on selectedItemId */}
              {/* Similar logic for fetching racks, levels, and blocks */}
            </select>
           
          </div>
        )}
        
        {/* Select Area */}
        {selectedItemId && (
          <div className="form-group">
            <select name="selectedArea" {...register("selectedArea",{ required: 'Area selection is required' })}>
              <option value="">Select Area</option>
              {areas.map((area) => (
                <option key={area.areaId} value={area.areaId}>
                  {area.areaName}
                </option>
              ))}
            </select>
            
          </div>
        )}

        {/* Select Rack */}
        {selectedAreaId && (
          <div className="form-group">
            <select name="selectedRack" {...register("selectedRack",{ required: 'Rack selection is required' })}>
              <option value="">Select Rack</option>
              {/* Populate racks based on selectedAreaId */}
            </select>
            
          </div>
        )}

        {/* Select Level */}
        {selectedRackId && (
          <div className="form-group">
            <select name="selectedLevel" {...register("selectedLevel",{ required: 'Level selection is required' })}>
              <option value="">Select Level</option>
              {/* Populate levels based on selectedRackId */}
            </select>
            
          </div>
        )}

        {/* Select Block */}
        {selectedLevelId && (
          <div className="form-group">
            <select name="selectedBlock" {...register("selectedBlock",{ required: 'Block selection is required' })}>
              <option value="">Select Block</option>
              {/* Populate blocks based on selectedLevelId */}
            </select>
            
          </div>
        )}

        <button type="submit" className="btn btn-primary">Transfer</button>
        <Link to='/auditdash'><button type="button" className="btn btn-primary" >Back</button></Link>
      </form>
    </div>
  );
};

export default Audit;