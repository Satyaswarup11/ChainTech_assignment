import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import AccountManagement from './components/AccountManagement';

const App = () => {
  return (
    <Router>
      <div className="bg-dark text-white p-4">
        <h1>Create and Manage Accounts</h1>
        <div>
          <Link to="/login" className="btn btn-primary m-2">
            Login
          </Link>
          <Link to="/registration" className="btn btn-success m-2">
            Register
          </Link>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/account" element={<AccountManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
