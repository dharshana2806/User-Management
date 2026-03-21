import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;