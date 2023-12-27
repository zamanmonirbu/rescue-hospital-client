import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Auth/Firebase/app.config";

const DoctorsInfoDisplay = () => {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setDoctorsData(data);
      } catch (error) {
        console.error("Error fetching doctors data: ", error);
      }
    };

    fetchData();
  }, []);


  console.log(doctorsData[0])

  return (
    <div className="bg-gray-100 py-8 " >
    <h1 className="text-2xl text-center text-red-500 mb-4">All Doctors' Information</h1>
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
      {doctorsData.map((doctor, index) => (
        <div key={index} className="p-4 border rounded-md shadow-lg text-center md:text-left">
          <h2 className="text-xl text-blue-500 mb-2 text-center">{doctor.name}</h2>
          <img src={doctor.drImage} alt="drImages" className="mt-4 mx-auto mb-8 rounded-full" style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>

          <p ><span className="font-bold"> Specialist: </span>{doctor.specialist}</p>
          <p ><span className="font-bold"> Experience: </span>{doctor.experience} Year</p>
          <p ><span className="font-bold"> Email: </span>{doctor.email}</p>
          <p ><span className="font-bold"> Age: </span>{doctor.age} Year</p>
          <p ><span className="font-bold"> Studied: </span>{doctor.studiedFrom}</p>
          <p ><span className="font-bold"> Fees: </span>{doctor.fees} -/৳</p>
          <div className="mt-2 mb-8">
            <p className="font-bold">Working Hours:</p>
          <div className="ml-8">
          <ul>
              {Object.entries(doctor.openForWork).map(([day, hours]) => (
                <li key={day}>
                  <strong>{day}:</strong> {hours.from} - {hours.to}
                </li>
              ))}
            </ul>
          </div>
          </div>
          <span><button class="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">Edit Info</button> <button class="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">Delete</button> </span>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  </div>
  );
};

export default DoctorsInfoDisplay;
