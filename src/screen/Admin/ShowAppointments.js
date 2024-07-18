import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";

const ShowAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsCollection = collection(db, "appointments");
        const appointmentsSnapshot = await getDocs(appointmentsCollection);

        const appointmentsData = appointmentsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error fetching appointments: ", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDateChange = async (date) => {
    setSelectedDate(date);

    try {
      const appointmentsCollection = collection(db, "appointments");
      const appointmentsSnapshot = await getDocs(appointmentsCollection);

      const appointmentsData = appointmentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredAppointments = appointmentsData.filter(
        (appointment) => appointment.date === date.toISOString().split("T")[0]
      );

      setAppointments(filteredAppointments);
    } catch (error) {
      console.error("Error fetching filtered appointments: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center mb-10">
      <div className="bg-gray-200 p-8 w-[90%] rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Appointments List
        </h2>

        <div className="mb-4 text-center p-8">
          <label className="block text-sm font-medium text-gray-700 ">
            Select Date for Filter
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <ul className="list-decimal pl-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="mb-4 p-4 border rounded-md shadow-md bg-slate-50"
            >
              <p>
                <strong>Name:</strong> {appointment.patientName},
              </p>
              <p>
                <strong>Date:</strong> {appointment.date},
              </p>
              <p>
                <strong>Time:</strong> {appointment.time},
              </p>
              <p>
                <strong>Address:</strong> {appointment.address},
              </p>
              <p>
                <strong>Age:</strong> {appointment.age}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowAppointments;
