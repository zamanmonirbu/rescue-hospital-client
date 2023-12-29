import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";

const PatientsListByAdmin = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsCollection = collection(db, "appointments");
        const patientsSnapshot = await getDocs(patientsCollection);
        const patientsData = patientsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPatients(patientsData);
      } catch (error) {
        console.error("Error fetching patients: ", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="flex items-center justify-center mb-10">
      <div className="bg-gray-200 p-8 w-[90%] rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Patients List</h2>

        <ul className="list-decimal pl-4">
          {patients.map((patient) => (
            <li
              key={patient.id}
              className="mb-4 p-4 border rounded-md shadow-md bg-slate-50"
            >
              <p>
                <strong>Name:</strong> {patient.patientName},
              </p>
              <p>
                <strong>Date:</strong> {patient.date},
              </p>
              <p>
                <strong>Time:</strong> {patient.time},
              </p>
              <p>
                <strong>Address:</strong> {patient.address},
              </p>
              <p>
                <strong>Age:</strong> {patient.age}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientsListByAdmin;
