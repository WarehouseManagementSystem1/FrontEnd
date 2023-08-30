import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../Css/Log.css';
import { Link } from 'react-router-dom';



const Log = () => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [logs, setLogs] = useState([]);
  const warehouseid = localStorage.getItem('warehouseid');
 const[back,setback] = useState();

  useEffect(() => {
    // Fetch log data from the backend
    const fetchLogs = async () => {
      
      var usertypes = localStorage.getItem('usertype');
    if(usertypes === 'ADMIN')
    {
      //backlink = '/admin';
      setback( '/admin');
    }
    else if(usertypes === 'USER')
    {
      //backlink ='/userdash';
      setback('/userdash');
    }
    else
    {
      //backlink = '/auditdash';
      setback('/auditdash');
    }
    //console.log(backlink);
      try {
        const response = await fetch(`http://localhost:8080/log/${warehouseid}`);
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };
    fetchLogs();
  }, []);


  return (
    <div className="log">
      <h2>Log</h2>
      <table className="log-table">
        <thead>
          <tr>
            <th>Transcation Type</th>
            <th>Item Name</th>
            <th>Item Id</th>
            <th>Initial Area Id</th>
            <th>Initial Rack Id</th>
            <th>Initial Level Id</th>
            <th>Initial Block Id</th>
            <th>Final Area Id</th>
            <th>Final Rack Id</th>
            <th>Final Level Id</th>
            <th>Final Block Id</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.transactionType}</td>
              <td>{log.itemName}</td>
              <td>{log.itemId}</td>
              <td>{log.initialAreaId}</td>
              <td>{log.initialRackId}</td>
              <td>{log.initialLevelId}</td>
              <td>{log.initialBlockId}</td>
              <td>{log.finalAreaId}</td>
              <td>{log.finalRackId}</td>
              <td>{log.finalLevelId}</td>
              <td>{log.finalBlockId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={ back }><button type="button" className="btn btn-primary" >Back</button></Link>
    </div>
  );
};

export default Log;