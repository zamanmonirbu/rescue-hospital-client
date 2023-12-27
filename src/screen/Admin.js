import React from 'react';
import { Link } from 'react-router-dom';
import appointment from '../component/images/medical-appointment.png'
import doctors from '../component/images/doctorHeader.jpg'
import admins from '../component/images/admin.png'
import statistics from '../component/images/statistics.png'
import patients from '../component/images/patients.png'
import DoctorsInfoDisplay from './ShowDoctors';

const Admin = () => {
  return (
    <div class="flex">
      <div class="flex w-2/5 md:w-1/4 h-screen bg-white">
        <div class="mx-auto py-10">
          <h1 class="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">Admin Panel</h1>
          <ul>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <img src={appointment} className='h-6 w-6 rounded-2xl' alt='appointment'/>
              <span class="font-semibold">Appointments</span>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <img src={doctors} className='h-6 w-6 rounded-2xl' alt='appointment'/>
              <span class="font-semibold">Doctors</span>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <img src={patients} className='h-6 w-6 rounded-2xl' alt='appointment'/>
              <Link to={"/calender/view"}><button>               <span class="font-semibold">Patients</span>
              </button></Link>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <img src={admins} className='h-6 w-6 rounded-2xl' alt='appointment'/>
              <span class="font-semibold">Admins</span>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <img src={statistics} className='h-6 w-6 rounded-2xl' alt='appointment'/>
              <span class="font-semibold">Statistics</span>
            </li>
            <button class="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">LogOut</button>
          </ul>
        </div>
      </div>
      <main class=" min-h-screen w-full">
        <nav class="flex justify-between px-10 bg-white py-6">
          <div class="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
            <input type="text" placeholder="search" class="bg-gray-100 outline-none w-full" />
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div class="flex items-center">
            <img class="w-8 rounded-full" src={doctors} alt="userImage" />
            <p>User</p>
          </div>
        </nav>
        <div class="w-full " style={{overflow: "auto"}}>
          <DoctorsInfoDisplay/>

        </div>
      </main>
    </div>
  );
};

export default Admin;