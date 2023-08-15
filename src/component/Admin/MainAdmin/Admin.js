import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { baseUrl } from '../../Const/Const';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [patient, setPatient] = useState([])
  useEffect(() => {
    axios.get(`${baseUrl}/patients`)
      .then(result => setPatient(result.data))
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div class="flex">
      <div class="flex w-2/5 md:w-1/4 h-screen bg-white">
        <div class="mx-auto py-10">
          <h1 class="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">Admin Panel</h1>
          <ul>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="font-semibold">Home</span>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="font-semibold">All Patient</span>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <Link to={"/calender/view"}><button>               <span class="font-semibold">Calender View</span>
              </button></Link>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="font-semibold">Profile</span>
            </li>
            <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span class="font-semibold">Setthing</span>
            </li>
            <button class="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">Learn</button>
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
            <img class="w-8 rounded-full" src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg" alt="Elon Musk" />
            <p>Elon Musk</p>
          </div>
        </nav>
        <div class="w-full ">
          <h1 class="text-2xl font-semibold">All Patients </h1>
          <div class="md:flex mt-4 space-x-4  justify-center">
            <section class="container mx-auto p-6 font-mono">
              <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div class="w-full overflow-x-auto">
                  <table class="w-full">
                    <thead>
                      <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th class="px-4 py-3">Name</th>
                        <th class="px-4 py-3">From</th>
                        <th class="px-4 py-3">To</th>
                        <th class="px-4 py-3">Status</th>
                        <th class="px-4 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      {
                        patient.map(pt => {
                          return <tr class="text-gray-700">
                            <td class="px-4 py-3 border">
                              <div class="flex items-center text-sm">
                                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p class="font-semibold text-black">{pt.name}</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-ms font-semibold border">{pt.from}</td>
                            <td class="px-4 py-3 text-ms font-semibold border">{pt.to}</td>

                            <td class="px-4 py-3 text-xs border">
                              <span class="px-2 mr-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Admit </span>
                              <span class="px-2 mr-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> pending </span>
                              <span class="px-2 mr-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Done </span>
                            </td>
                            <td> <Link class="bg-green-400 text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"><button>Edit</button></Link> <Link class="bg-red-400 text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"><button>Delete</button></Link></td>
                          </tr>
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;