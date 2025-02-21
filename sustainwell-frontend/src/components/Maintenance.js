import React, { useState, useEffect } from 'react';
import { fetchLogs } from '../services/api';

const Maintenance = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs()
      .then(response => setLogs(response.data))
      .catch(error => console.error('Error fetching maintenance logs:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-green-600">Maintenance Logs</h1>
      </header>
      <div className="bg-white shadow rounded p-4">
        {logs.length === 0 ? (
          <p>No maintenance logs available.</p>
        ) : (
          <ul className="divide-y">
            {logs.map(log => (
              <li key={log.id} className="py-4">
                <p><strong>Resource:</strong> {log.resource}</p>
                <p><strong>Date:</strong> {log.date}</p>
                <p><strong>Issue:</strong> {log.issue}</p>
                <p><strong>Resolved:</strong> {log.resolved ? 'Yes' : 'No'}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Maintenance;
