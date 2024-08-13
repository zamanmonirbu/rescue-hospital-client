import React, { useContext, useEffect, useState } from "react";
import google from "../../component/assets/images/google.png";
import { useLocation, useNavigate } from "react-router-dom";
import { apiContext } from "../../App";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/app.config";
import Footer from "../../component/User/Footer/Footer";
import Navbar from "../../component/User/Navbar/Navbar";
import Error from "../../component/SideEffects/Error";

const Login = () => {
  const [user, setUser] = useContext(apiContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("userDetails", JSON.stringify(user));
        setUser(user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setError(true);
      });
  };

  const handleGooglePopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("userDetails", JSON.stringify(user));
        setUser(user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  useEffect(() => {
    if (user) {
      navigate(location?.state?.prevUrl || "/");
    }
  }, [navigate, location?.state?.prevUrl, user]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          {error && <Error />}
          <h2 className="text-2xl font-bold mb-8 text-center">User Login</h2>
          <form onSubmit={handleEmailLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            New user?{" "}
            <a href="/user/register" className="text-blue-500 hover:underline">
              Create a new account
            </a>
          </p>
          <hr className="my-6" />
          <button onClick={handleGooglePopup} className="bg-gray-200 flex items-center text-black py-2 px-4 rounded-md hover:bg-gray-400">
            <img src={google} alt="Google" className="h-6 w-6 mr-2" />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
