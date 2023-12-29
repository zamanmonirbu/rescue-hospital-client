import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Auth/Firebase/app.config";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loading from "../../SideEffects/Loading";

const SingleDoctor = () => {
  const { id } = useParams();
  const [doctorData, setDoctorData] = useState(null);


  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const doctorDoc = await getDoc(doc(db, "doctors", id));

        if (doctorDoc.exists()) {
          const data = { id: doctorDoc.id, ...doctorDoc.data() };
          setDoctorData(data);
        } 

      } catch (error) {
        console.error("Error fetching doctor data: ", error);
        
      }
    };

    fetchDoctorData();
  }, [id]);

 

  return (
   
    <>
    <Navbar />
    {doctorData ? (
      <div className="bg-gray-100 py-8 flex justify-center">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2  p-8">
          {/* Doctor Information */}
          <div className="p-4 border rounded-md shadow-lg">
            <h2 className="text-2xl text-yellow-500 mb-2 text-center">
              {doctorData.name}
            </h2>
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
          </div>
  
          {/* Appointment Time */}
          <div className="p-4 border rounded-md shadow-lg">
            <div className=" mb-4 text-center">
              <p className="my-2 bg-gray-200 p-1 rounded-md mx-auto font-semibold">
                You Can Appoint On
              </p>
              <table className="mx-auto border-collapse border border-gray-500">
                <thead>
                  <tr>
                    <th className="border border-gray-500 p-2">Day</th>
                    <th className="border border-gray-500 p-2">Start Time</th>
                    <th className="border border-gray-500 p-2">End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(doctorData.openForWork).map(([day, hours]) => (
                    <tr key={day} className="border border-gray-500">
                      <td className="border border-gray-500 p-2">{day}</td>
                      <td className="border border-gray-500 p-2">{hours.from}</td>
                      <td className="border border-gray-500 p-2">{hours.to}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  
           <div className="text-center">
           <Link to={`/doctor/appointment/${doctorData.id}`} >
              <button className="mt-8 bg-gray-800 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
                Appoint Now
              </button>
            </Link>
           </div>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    )}
  
    <Footer />
  </>
  
  );
};

export default SingleDoctor;
