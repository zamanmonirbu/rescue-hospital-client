import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase/app.config";

const AdminLogin = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const adminRef = doc(db, "admins", user.uid);
      const adminSnapshot = await getDoc(adminRef);

      if (adminSnapshot.exists()) {
        const adminData = adminSnapshot.data();
        if (adminData) {
          localStorage.setItem("adminInfo", JSON.stringify(adminData));
          Navigate("/admin/page");
        }
      }
    } catch (error) {
      console.error("Error during admin login: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>

        <form onSubmit={handleAdminLogin}>
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
            Login As Admin
          </button>
        </form>
        <hr className="my-6" />
      </div>
    </div>
  );
};

export default AdminLogin;
