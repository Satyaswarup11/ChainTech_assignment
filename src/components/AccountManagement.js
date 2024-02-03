import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountManagement = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUpdateAccount = () => {
    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match');
    } else {
      // Update user information in local storage
      localStorage.setItem('password', newPassword);

      // Display saved alert
      alert('Saved');
    }
  };

  const handleLogout = () => {
    // Remove user information from local storage
    localStorage.removeItem('user');
    localStorage.removeItem('password');

    // Redirect to home page after logout
    navigate('/');
  };

  // Fetch user information from local storage
  const storedUser = localStorage.getItem('user');

  return (
    <div>
        <div className="container mt-5">
        <div className="card">
            <div className="card-body">
            <h2 className="card-title" style={{ color: 'black' }}>Account Management</h2>
            <p>Welcome, {storedUser}!</p>
            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>New Password</label>
                <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>Confirm New Password</label>
                <input
                type="password"
                className="form-control"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="button" className="btn btn-primary" onClick={handleUpdateAccount}>
                Update Account
            </button>
            <button type="button" className="btn btn-danger ms-2" onClick={handleLogout}>
                Logout
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default AccountManagement;
