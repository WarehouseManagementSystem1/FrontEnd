import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Log.css';

const Log = () => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [logs, setLogs] = useState([]);
  const warehouseid = localStorage.getItem('warehouseid');

  useEffect(() => {
    // Fetch log data from the backend
    const fetchLogs = async () => {
      try {
        const response = await fetch(`your-backend-api-url/${warehouseid}`);
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
            <th>Transfer Type</th>
            <th>Item Name</th>
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
              <td>{log.transferType}</td>
              <td>{log.itemName}</td>
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
    </div>
  );
};

export default Log;