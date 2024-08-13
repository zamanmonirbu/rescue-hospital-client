import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdminAuthenticated, loginAdmin } from './AdminAuth';
import { apiContext } from '../../App';
import Navbar from '../../component/User/Navbar/Navbar';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [verifyUser, setVerifyUser] = useContext(apiContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const isAuthenticated = await loginAdmin(username, password);
    if (isAuthenticated) {
      setVerifyUser(isAdminAuthenticated);
      navigate('/admin/page');
    } else {
      setError('Invalid credentials, please try again.');
    }
  };
  console.log(verifyUser);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Username</label>
              <input
                type="text"
                value={username}
                placeholder="Enter your email"
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
