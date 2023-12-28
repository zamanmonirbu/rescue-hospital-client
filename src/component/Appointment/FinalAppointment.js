import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";
import WorkingHoursDisplay from "./WorkingHoursDisplay ";

const FinalAppointment = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    time: "",
    // other fields...
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [doctorInfo, setDoctorInfo] = useState({});
  const { doctorId } = useParams();
  console.log(doctorId);

  useEffect(() => {
    // Fetch specific doctor by ID
    const fetchDoctorData = async () => {
      try {
        const doctorRef = doc(db, "doctors", doctorId);
        const doctorSnapshot = await getDoc(doctorRef);

        if (doctorSnapshot.exists()) {
          const doctorData = doctorSnapshot.data();
          setDoctorInfo(doctorData);
        } else {
          console.log("Doctor not found");
        }
      } catch (error) {
        console.error("Error fetching doctor data: ", error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  console.log("Doctor",doctorInfo);
  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-2xl text-center text-green-500 mb-4">
        Finalize Appointment
      </h1>
      <form className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) =>
              setAppointmentDetails({
                ...appointmentDetails,
                date: e.target.value,
              })
            }
          />
        </div>
   
        <div className="mb-4">
          <label
            htmlFor="patientName"
            className="block text-gray-700 font-bold mb-2"
          >
            You Will be appoint on:
          </label>
          <WorkingHoursDisplay doctorData={appointmentDetails}/>
            {/* {Object.entries(doctorInfo.openForWork).map(([day, hours]) => (
                <li key={day}>
                  <strong>{day}:</strong> {hours.from} - {hours.to}
                </li>
              ))} */}
          
          {/* <input
            type="text"
            id="patientName"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) =>
              setAppointmentDetails({
                ...appointmentDetails,
                patientName: e.target.value,
              })
            }
          /> */}
        </div>
        <div className="mb-4">
          <label
            htmlFor="patientName"
            className="block text-gray-700 font-bold mb-2"
          >
            Patient Name:
          </label>
          <input
            type="text"
            id="patientName"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) =>
              setAppointmentDetails({
                ...appointmentDetails,
                patientName: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) =>
              setAppointmentDetails({
                ...appointmentDetails,
                address: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
            Age:
          </label>
          <input
            type="text"
            id="age"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) =>
              setAppointmentDetails({
                ...appointmentDetails,
                age: e.target.value,
              })
            }
          />
        </div>
        {/* Add more fields for other appointment details as needed */}
        <button
          type="button"
          className="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl"
        //   onClick={handleAppointmentSubmit}
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default FinalAppointment;
