// AdminLogin.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { apiContext } from '../../App';
import { isAdminAuthenticated, loginAdmin } from './AdminAuth';
import { apiContext } from '../../App';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [verifyUser, setVerifyUser] = useContext(apiContext);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    const isAuthenticated = await loginAdmin(username, password);
    console.log(isAuthenticated);
    if (isAuthenticated) {
      setVerifyUser(isAdminAuthenticated);
      console.log("working",isAdminAuthenticated())
      navigate('/admin/page');
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-10 bg-gray-200 rounded-md shadow-md">
      <Link to={'/'} className='p-2  bg-green-400 rounded-xl flex items-center justify-center '>Go Home</Link>

        <h2 className="text-2xl font-bold mb-4 my-10">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-6 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-6 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
