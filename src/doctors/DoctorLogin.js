import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Auth/Firebase/app.config";
import Navbar from "../component/User/Navbar/Navbar";

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const q = query(
        collection(db, "doctors"),
        where("email", "==", email),
        where("password", "==", password)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doctor = querySnapshot.docs[0].data();
        const doctorId = querySnapshot.docs[0].id;
        localStorage.setItem("doctorInfo", JSON.stringify({
          id: doctorId,
          ...doctor,
        }));
        navigate(`/doctor/appointments/${doctorId}`);
      } else {
        setError("Incorrect email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Doctor Login</h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DoctorLogin;
