import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { baseUrl } from '../Const/Const';
import { Link } from 'react-router-dom';

const Calender = () => {
  const [value, onChange] = useState(new Date());
  const [onePatient, setOnePatient] = useState([])
  const dateObject = new Date(value);
  console.log(dateObject);
  const day = dateObject.getDate();
  // console.log("day",day);
  useEffect(() => {
    axios.get(`${baseUrl}/find/${day}`)
      .then(result => setOnePatient(result.data))
      .catch((err) => {
        console.log(err);
      })
  }, [day])
  return (
    <div className='w-full h-full p-10'>
      <Calendar onChange={onChange} value={value} className="w-1/2 h-52 rounded-xl bg-violet-300  mx-auto w-1/2"/>
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
                  onePatient?
                  onePatient.map(pt => {
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
                  }):<p>No booking</p>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Calender;