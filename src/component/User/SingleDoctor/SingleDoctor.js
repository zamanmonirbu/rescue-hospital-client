import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Auth/Firebase/app.config";
import { Link, useParams } from "react-router-dom";

const SingleDoctor = () => {
  const { id } = useParams();
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const doctorDoc = await getDoc(doc(db, "doctors", id));

        if (doctorDoc.exists()) {
          const data = { id: doctorDoc.id, ...doctorDoc.data() };
          setDoctorData(data);
        } else {
          setError("Doctor not found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor data: ", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!doctorData) {
    return <p>Doctor not found</p>;
  }

  return (
    <div className="bg-gray-100 py-8">
      <h1 className="text-2xl text-center text-green-500 mb-4">
        A Specialist In Our Country
      </h1>
      <div className="max-w-3xl mx-auto p-8">
        <div className="p-4 border rounded-md shadow-lg flex flex-col ">
          <h2 className="text-2xl text-yellow-500 mb-2 text-center">{doctorData.name}</h2>
          {/* Center the image */}
          <img
            src={doctorData.drImage}
            alt={`Dr ${doctorData.name}`}
            className="mt-4 mb-2 rounded-full mx-auto"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />

          <div className="text-left ml-8">
            <p>
              <span className="font-bold"> Specialist: </span>
              {doctorData.specialist}
            </p>
            <p>
              <span className="font-bold"> Experience: </span>
              {doctorData.experience} Year
            </p>
            <p>
              <span className="font-bold"> Age: </span>
              {doctorData.age} Year
            </p>
            <p>
              <span className="font-bold"> Studied: </span>
              {doctorData.studiedFrom}
            </p>
            <p>
              <span className="font-bold"> Fees: </span>
              {doctorData.fees} -/৳
            </p>
          </div>
          <Link to={`/doctor/appointment/${doctorData.id}`} className="text-center">
            <button className=" mt-8 bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
              Appoint Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
