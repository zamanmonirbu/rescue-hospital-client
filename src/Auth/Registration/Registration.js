import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Auth/Firebase/app.config";
import Footer from "../../component/User/Footer/Footer";
import Navbar from "../../component/User/Navbar/Navbar";
import Error from "../../component/SideEffects/Error";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigate("/user/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error.code, error.message);
        setError(true);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          {error && <Error />}
          <h2 className="text-2xl font-bold mb-8 text-center">Registration Form</h2>
          <form onSubmit={handleCreateAccount}>
            <div className="mb-4">
              <label htmlFor="registerEmail" className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                id="registerEmail"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="registerPassword" className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                id="registerPassword"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/user/login" className="text-blue-500 hover:underline">Sign In</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
