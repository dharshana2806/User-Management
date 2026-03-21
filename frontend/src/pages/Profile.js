import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Profile;