import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../../Auth/Firebase/app.config";
import Footer from "../Footer/Footer";

const AdminShowDoctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctorsData(data);
      } catch (error) {
        console.error("Error fetching doctors data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-2xl text-center text-red-500 mb-8">
        Our Top Rated Doctors
      </h1>
      <div className="max-w-[90%] mx-auto grid md:grid-cols-3 gap-8">
        {doctorsData.map((doctor) => (
          <div
            key={doctor.id}
            className="p-4 border rounded-md shadow-lg text-center md:text-left"
          >
            <h2 className="text-xl text-blue-500 mb-2 text-center">
              {doctor.name}
            </h2>
            <img
              src={doctor.drImage}
              alt="drImages"
              className="mt-4 mx-auto mb-8 rounded-full"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <p>
              <span className="font-bold"> Specialist: </span>
              {doctor.specialist}
            </p>
            <p>
              <span className="font-bold"> Experience: </span>
              {doctor.experience} Year
            </p>
            <p>
              <span className="font-bold"> Email: </span>
              {doctor.email}
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
            <div className="text-center">
              <Link
                to={`/doctor/appointment/${doctor.id}`}
                className="text-center"
              >
                <button className="mt-8 bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl">
                  Appoint Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AdminShowDoctors;
