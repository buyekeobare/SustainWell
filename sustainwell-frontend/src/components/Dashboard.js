import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-green-600">Dashboard</h1>
      </header>
      <div className="bg-white shadow rounded p-4">
        <p>This is the dashboard. Here you can view analytics and reports on water resource usage.</p>
        {/* Integrate charts/graphs using libraries like Chart.js or Recharts */}
      </div>
    </div>
  );
};

export default Dashboard;
