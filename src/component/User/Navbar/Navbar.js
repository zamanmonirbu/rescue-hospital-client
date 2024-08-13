import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { apiContext } from "../../../App";
import userImg from '../../../component/assets/images/profile.png'
import admin from '../../../component/assets/images/admin.png'
import drImg from '../../../component/assets/images/doctor.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user] = useContext(apiContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-gray-900 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/color/48/doctor-male--v1.png"
              alt=""
            />
            <Link to="/" className="text-white font-semibold text-xl">
              Rescue Hospital
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/appointment" className="text-gray-300 hover:text-white">
              Appointment
            </Link>
            <Link to="/show/doctors" className="text-gray-300 hover:text-white">
              Doctors
            </Link>
            {! user?.photoURL &&
            <Link to="/admin/page" className="text-gray-300 hover:text-white">
            <img src={admin} alt="" className="h-8 w-8 rounded-full"  title="Admin Profile" />
            </Link>
            }
            
            {
            user?.photoURL ?(
             <Link to={`user/profile/${user?.uid}`}> 
                <img
             src={user?.photoURL}
             alt="navImage"
             className="h-6 w-6 rounded-full"
             title="User Profile"
           /></Link>
            ) :  (
              <div>
                <Link
                  to="/user/login"
                  className="text-gray-300 hover:text-white"
                >
                  <img src={userImg} alt="" className="h-8 w-8 rounded-full"  title="User Profile" />
                </Link>
              </div>
            )}

            {! user?.photoURL &&
          ( <Link to="/doctor/login" className="text-gray-300 hover:text-white">
           <img src={drImg} alt="" className="h-8 w-8 rounded-full"  title="Doctor Profile" />
     </Link>)
           
            }

          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 9H5a1 1 0 010-2h14a1 1 0 110 2zm0 4H5a1 1 0 110-2h14a1 1 0 010 2zm0 4H5a1 1 0 110-2h14a1 1 0 010 2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden space-y-1 text-center p-1">
            <Link to="/" className="block text-gray-100 hover:text-black hover:bg-slate-200 hover:p-1  hover:font-semibold p-1 bg-gray-500 ">
              Home
            </Link>
            
            <Link
              to="/appointment"
             className="block text-gray-100 hover:text-black hover:bg-slate-200 hover:p-1  hover:font-semibold my-2 p-1 bg-gray-500 "
            >
              Appointment
            </Link>
            <Link
              to="/show/doctors"
             className="block text-gray-100 hover:text-black hover:bg-slate-200 hover:p-1  hover:font-semibold my-2 p-1 bg-gray-500 "
            >
              Doctors
            </Link>
            <Link
              to="/admin/page"
             className="block text-gray-100 hover:text-black hover:bg-slate-200 hover:p-1  hover:font-semibold my-2 p-1 bg-gray-500 "
            >
              Admin
            </Link>
            <Link
              to="/user/login"
             className="block text-gray-100 hover:text-black hover:bg-slate-200 hover:p-1  hover:font-semibold my-2 p-1 bg-gray-500 "
            >
              Login
            </Link>
            <Link
              to="/user/register"
             className="block text-gray-100 hover:text-black hover:bg-slate-200 hover:p-1  hover:font-semibold my-2 p-1 bg-gray-500 "
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
