import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Auth/Firebase/app.config";
import { Link } from "react-router-dom";
import Loading from "../../SideEffects/Loading";

const OurDoctorFor = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "doctors"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctorsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}

      <div className="bg-gray-100 py-8">
        <h1 className="text-2xl text-center text-red-500 mb-4">
         Available Doctors Are Here
        </h1>
        <div className="max-w-[90%] mx-auto grid sm:grid-cols-3 gap-4 ">
          {doctorsData.map((doctor, index) => (
            <div
              key={index}
              className="p-4 border rounded-md shadow-lg "
            >
              <h2 className="text-xl text-green-500 mb-2 text-center">{doctor.name}</h2>
              <img
                src={doctor.drImage}
                alt={`Dr ${doctor.name}`}
                className="mt-4 mb-2 rounded-full mx-auto"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <div className="text-left mt-8">
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
             
              <div className="text-center">
                {" "}
                <Link to={`/doctor/${doctor.name}/${doctor.id}`}>
                  <button className="mt-8 bg-gray-800 hover:bg-emerald-500 text-white font-bold py-1 px-3 mr-2 border border-emerald-500 rounded-2xl ">
                    See more
                  </button>
                </Link>
                <Link to={`/doctor/appointment/${doctor.id}`}>
                  <button className="mt-8 bg-gray-800 hover:bg-emerald-500 text-white font-bold py-1 px-2  border border-emerald-500 rounded-3xl ">
                    Appoint Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurDoctorFor;
