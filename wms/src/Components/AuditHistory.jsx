import React, { useState, useEffect } from 'react';
import './AuditHistory.css'; // Import the CSS file for styling

function AuditHistory() {
  const [auditHistory, setAuditHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAuditHistory();
  }, []);

  const fetchAuditHistory = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('YOUR_API_ENDPOINT_URL');
      const data = await response.json();
      setAuditHistory(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching audit history:', error);
      setLoading(false);
    }
  };

  return (
    <div className="audit-history">
      <h1>Audit History</h1>
      <button className="fetch-button" onClick={fetchAuditHistory}>
        Fetch Audit History
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="audit-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Item Name</th>
              <th>Area ID</th>
              <th>Rack ID</th>
              <th>Level ID</th>
              <th>Block ID</th>
            </tr>
          </thead>
          <tbody>
            {auditHistory.map((audit, index) => (
              <tr key={index}>
                <td>{audit.timestamp}</td>
                <td>{audit.itemName}</td>
                <td>{audit.areaId}</td>
                <td>{audit.rackId}</td>
                <td>{audit.levelId}</td>
                <td>{audit.blockId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AuditHistory;
