import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      const userList = response.data;
      setUsers(userList);
      // console.log(userList);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async () => {
    try {
      const response = await axios.post('/api/users', {
        username: newUsername,
        email: newEmail,
        password: newPassword
      });
      console.log(newUsername, newEmail, newPassword);
      const newUser = response.data;
      setUsers([...users, newUser]);
      setNewUsername('');
      setNewEmail('');
      setNewPassword('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUserLocally = (userId, field, value) => {
    const updatedUsers = users.map(user =>
      user._id === userId ? { ...user, [field]: value } : user
    );
    setUsers(updatedUsers);
  };

  const updateUser = async (userId, newUsername, newEmail, newPassword) => {
    try {
      await axios.put(`/api/users/${userId}`, {
        username: newUsername,
        email: newEmail,
        password: newPassword
      });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <div>
        <input type="text" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button onClick={addUser}>Add User</button>
      </div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <div>
              <input type="text" value={user.username} onChange={(e) => updateUserLocally(user._id, 'username', e.target.value)} />
              <input type="email" value={user.email} onChange={(e) => updateUserLocally(user._id, 'email', e.target.value)} />
              <input type="password" value={user.password} onChange={(e) => updateUserLocally(user._id, 'password', e.target.value)} />
              <button onClick={() => deleteUser(user._id)}>Delete</button>
              <button onClick={() => updateUser(user._id, user.username, user.email, user.password)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
