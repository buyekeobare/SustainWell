import React from 'react';
import { Link } from 'react-router-dom'; 

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-600">SustainWell</h1>
        <p className="mt-4 text-lg text-gray-700">
          Empowering communities to monitor, manage, and sustain shared resources like boreholes and water points.
        </p>
      </header>
      <nav className="flex space-x-4">
        <Link to="/resources" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Monitor Resources
        </Link>
        <Link to="/maintenance" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Maintenance
        </Link>
        <Link to="/dashboard" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default LandingPage;
