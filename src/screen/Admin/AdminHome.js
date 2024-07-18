import React, { useContext, useState } from "react";
import appointment from "../../component/assets/images/medical-appointment.png";
import doctors from "../../component/assets/images/doctorHeader.jpg";
import admins from "../../component/assets/images/admin.png";
import statistics from "../../component/assets/images/statistics.png";
import patients from "../../component/assets/images/patients.png";
import { apiContext } from "../../App";
import ShowAppointments from "./ShowAppointments";
import DoctorsByAdmin from "./DoctorsByAdmin";
import PatientsStatistics from "./PatientsStatistics";
import PatientsListByAdmin from "./PatientsListByAdmin";
import ShowAllAdmin from "./ShowAllAdmin";
import { logoutAdmin } from "../../Auth/Login/AdminAuth";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const [user] = useContext(apiContext);
  const [selectedMenu, setSelectedMenu] = useState("appointments");
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutAdmin();
    navigate('/');
    window.location.reload();
  };

  const renderSelectedComponent = () => {
    switch (selectedMenu) {
      case "doctors":
        return (
          <div>
            <DoctorsByAdmin />
          </div>
        );
      case "appointments":
        return (
          <div>
            <ShowAppointments />
          </div>
        );
      case "patients":
        return <PatientsListByAdmin />;
      case "admins":
        return (
          <div>
            <ShowAllAdmin />
          </div>
        );
      case "statistics":
        return (
          <div>
            <PatientsStatistics />
          </div>
        );
      default:
        return <ShowAppointments />;
    }
  };

  return (
    <div className="flex w-[80%] md:w-full">
      <div className="flex w-2/5 md:w-1/4 h-screen bg-white">
        <div className="mx-auto py-10">
          <h1 className="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">
            Admin Panel
          </h1>
          <ul>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <img
                src={appointment}
                className="h-6 w-6 rounded-2xl"
                alt="appointment"
              />
              <button onClick={() => setSelectedMenu("appointments")}>
                <span className="font-semibold">Appointments</span>
              </button>
            </li>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <img
                src={doctors}
                className="h-6 w-6 rounded-2xl"
                alt="appointment"
              />
              <button onClick={() => setSelectedMenu("doctors")}>
                <span className="font-semibold">Doctors</span>
              </button>
            </li>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <img
                src={patients}
                className="h-6 w-6 rounded-2xl"
                alt="appointment"
              />
              <button onClick={() => setSelectedMenu("patients")}>
                <span className="font-semibold">Patients</span>
              </button>
            </li>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <img
                src={admins}
                className="h-6 w-6 rounded-2xl"
                alt="appointment"
              />
              <button onClick={() => setSelectedMenu("admins")}>
                <span className="font-semibold">Admin</span>
              </button>
            </li>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <img
                src={statistics}
                className="h-6 w-6 rounded-2xl"
                alt="appointment"
              />
              <button onClick={() => setSelectedMenu("statistics")}>
                <span className="font-semibold">Statistics</span>
              </button>
            </li>
            <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <Link to="/" className="bg-green-400 p-2 rounded-xl">Go Home</Link>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white"
              >
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </div>
      <main className="min-h-screen w-full">
        <nav className="flex justify-between px-10 bg-white py-6">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
            <input
              type="text"
              placeholder="search"
              className="bg-gray-100 outline-none w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 1114 0 7 7 0 01-14 0z"
              />
            </svg>
          </div>
          <div className="flex items-center">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="navImage"
                className="h-8 w-8 rounded-full"
              />
            ) : user.email ? (
              <p className="text-black bg-gray-300 border rounded px-2">
                {user.email}
              </p>
            ) : (
              <p>Admin</p>
            )}
          </div>
        </nav>
        <div className="w-full variableDiv" style={{ overflow: "auto" }}>
          {renderSelectedComponent()}
        </div>
      </main>
    </div>
  );
};

export default Admin;
