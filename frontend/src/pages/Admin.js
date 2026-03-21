import React, { useState, useEffect } from 'react';
import api from '../api';
import { useAuth } from '../context/AuthContext';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get('/admin/users');
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (user?.role === 'admin') fetchUsers();
  }, [user]);

  if (!user || user.role !== 'admin') {
    return <p>Access denied. Admin only.</p>;
  }

  return (
    <div>
      <h2>Admin Panel - All Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} ({u.email}) - Role: {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;