import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../Auth/Firebase/app.config";

const DoctorsBySpecialist = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const { specialistCategory } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "doctors"),
          where("specialist", "==", specialistCategory)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setDoctorsData(data);
      } catch (error) {
        console.error("Error fetching doctors data: ", error);
      }
    };

    fetchData();
  }, [specialistCategory]);
  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-2xl text-center text-red-500 mb-4">
        Doctors in {specialistCategory} Category
      </h1>
      <div className="max-w-[90%] mx-auto grid grid-cols-3 gap-4">
        {doctorsData.map((doctor, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-lg flex flex-col items-center"
          >
            <h2 className="text-xl text-green-500 mb-2">{doctor.name}</h2>
            {/* Center the image */}
            <img
              src={doctor.drImage}
              alt={`Dr ${doctor.name}`}
              className="mt-4 mb-2 rounded-full"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />

            <div className="text-left">
              <p>
                <span className="font-bold"> Specialist: </span>
                {doctor.specialist}
              </p>
              <p>
                <span className="font-bold"> Experience: </span>
                {doctor.experience} Year
              </p>
              <p>
                <span className="font-bold"> Age: </span>
                {doctor.age} Year
              </p>
              <p>
                <span className="font-bold"> Studied: </span>
                {doctor.studiedFrom}
              </p>
              <p>
                <span className="font-bold"> Fees: </span>
                {doctor.fees} -/৳
              </p>
            </div>
            {/* Display working hours for each day */}
            {/* <div className="mt-2 mb-4">
              <p>You Can Appoint:</p>
              <ul>
                {Object.entries(doctor.openForWork).map(([day, hours]) => (
                  <li key={day}>
                    <strong>{day}:</strong> {hours.from} - {hours.to}
                  </li>
                ))}
              </ul>
            </div> */}
            <Link to={`/doctor/appointment/${doctor.id}`}>
              <button className="mt-8 bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
                Appoint Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsBySpecialist;
