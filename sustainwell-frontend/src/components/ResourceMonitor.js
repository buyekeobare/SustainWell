import React, { useState, useEffect } from 'react';
import { fetchResources } from '../services/api';

const ResourceMonitor = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources()
      .then(response => setResources(response.data))
      .catch(error => console.error('Error fetching resources:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-green-600">Resource Monitor</h1>
      </header>
      <div className="bg-white shadow rounded p-4 overflow-x-auto">
        {resources.length === 0 ? (
          <p>No resources available.</p>
        ) : (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Capacity</th>
                <th className="px-4 py-2 text-left">Current Usage</th>
              </tr>
            </thead>
            <tbody>
              {resources.map(resource => (
                <tr key={resource.id} className="border-t">
                  <td className="px-4 py-2">{resource.name}</td>
                  <td className="px-4 py-2">{resource.capacity}</td>
                  <td className="px-4 py-2">{resource.current_usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ResourceMonitor;
