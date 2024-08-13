import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../../Auth/Firebase/app.config";
import { apiContext } from "../../../App";

const AppointmentFinal = () => {
  const navigate = useNavigate();
  const [user] = useContext(apiContext);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    time: "",
    address: "",
    patientName: "",
    age: "",
  });
  const [doctorInfo, setDoctorInfo] = useState({});
  const { doctorId } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  let workingHours = null;

  useEffect(() => {
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

  const getWorkingHours = (selectedDate) => {
    if (!selectedDate) {
      return null;
    }
    const dayOfWeek = new Date(selectedDate).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const drData = doctorInfo.openForWork?.[dayOfWeek];
    return drData || null;
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleAppointmentSubmit = async () => {
    if (!user?.uid) {
      console.error("User ID is missing");
      return;
    }

    try {
      const appointmentData = {
        date: selectedDate,
        time: workingHours ? `${workingHours.from} - ${workingHours.to}` : "",
        address: appointmentDetails.address,
        patientName: appointmentDetails.patientName,
        age: appointmentDetails.age,
        doctorId: doctorId,
        doctorName: doctorInfo.name,
        patientId: user.uid,
      };

      const appointmentsCollectionRef = collection(db, "appointments");
      const saveAppointment = await addDoc(appointmentsCollectionRef, appointmentData);
      if (saveAppointment.id) {
        alert("Appointment Successfully Done");
        navigate('/');
      }
    } catch (error) {
      console.error("Error saving appointment: ", error);
    }
  };

  if (doctorInfo) {
    workingHours = getWorkingHours(selectedDate);
  }

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-2xl text-center text-green-500 mb-4">
        Finalize Appointment
      </h1>
      <form className="max-w-2xl mx-auto bg-slate-300 p-16 rounded-xl">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleDateChange}
          />
        </div>

        <div className="mt-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Your Time Will Be :</h2>
          {workingHours ? (
            <div>
              <p>
                <strong>From:</strong> {workingHours.from}
              </p>
              <p>
                <strong>To:</strong> {workingHours.to}
              </p>
            </div>
          ) : (
            <p className="text-red-500">
              To Know Booking Time please select Date.
            </p>
          )}
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
        <button
          type="button"
          className="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl"
          onClick={handleAppointmentSubmit}
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentFinal;
