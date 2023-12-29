import React, { useContext, useEffect, useState } from "react";
import google from "../../component/assets/images/google.png";
import { useLocation, useNavigate } from "react-router-dom";
import { apiContext } from "../../App";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/app.config";



const Login = () => {
  const [user, setUser] = useContext(apiContext);
  const location = useLocation();
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const jsonString = JSON.stringify(user);
        localStorage.setItem("userDetails", jsonString);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGooglePopup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const jsonString = JSON.stringify(user);
        localStorage.setItem("userDetails", jsonString);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    if (user) {
      if (location?.state?.prevUrl) {
        Navigate(location?.state?.prevUrl);
      } else {
        Navigate("/");
      }
    }
  }, [Navigate, location?.state?.prevUrl, user]);

  useEffect(() => {

    if (user) {
      if (location?.state?.prevUrl) {
        Navigate(location?.state?.prevUrl);
      } else {
        Navigate("/");
      }
    }
  }, [Navigate, location?.state?.prevUrl, user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>

        <form onSubmit={handleGoogleLogin}>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="loginEmail"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="w-1/2 pl-2">
              <label
                htmlFor="loginPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
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

        <button
          onClick={handleGooglePopup}
          className="bg-gray-200 flex text-black py-2 px-4 rounded-md hover:bg-gray-400"
        >
          <img src={google} alt="google" className="h-6 w-6 mr-2" />{" "}
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
