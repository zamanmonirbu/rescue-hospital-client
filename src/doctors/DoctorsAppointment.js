import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Auth/Firebase/app.config";
import { useParams } from "react-router-dom";

const DoctorsAppointment = () => {
  const { doctorId } = useParams();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const q = query(collection(db, "appointments"), where("doctorId", "==", doctorId));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments: ", error);
      }
    };

    fetchAppointments();
  }, [doctorId]);

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Appointments for Doctor</h2>
      <div className="max-w-4xl mx-auto">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment.id} className="p-4 mb-4 border rounded-md shadow-lg">
              <p><span className="font-bold">Patient Name:</span> {appointment.patientName}</p>
              <p><span className="font-bold">Date:</span> {appointment.date}</p>
              <p><span className="font-bold">Time:</span> {appointment.time}</p>
              <p><span className="font-bold">Address:</span> {appointment.address}</p>
            </div>
          ))
        ) : (
          <p className="text-center">No appointments found for this doctor.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorsAppointment;
