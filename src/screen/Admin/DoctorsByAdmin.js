import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";
import { Link } from "react-router-dom";

const DoctorsByAdmin = () => {
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

  const handleDeleteDoctor = async (doctorId) => {
    try {
      const doctorRef = doc(db, "doctors", doctorId);
      await deleteDoc(doctorRef);
      setDoctorsData((prevDoctors) =>
        prevDoctors.filter((doctor) => doctor.id !== doctorId)
      );
      console.log("Doctor deleted successfully!");
    } catch (error) {
      console.error("Error deleting doctor: ", error);
    }
  };

  return (
    <div className="bg-gray-100 py-8 ">
   <div className="text-center mb-8">
   <Link to="/doctor/data/input" >
              <button className="mt-8 bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
                Add A Doctor
              </button>
            </Link>
   </div>
   <h2 className="text-2xl font-bold mb-4 text-center">Doctors List</h2>

      
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
      
        {doctorsData.map((doctor, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-lg text-center md:text-left"
          >
            <h2 className="text-xl text-blue-500 mb-2 text-center">
              {doctor.name}
            </h2>
            <img
              src={doctor.drImage}
              alt="drImages"
              className="mt-4 mx-auto mb-8 rounded-full"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
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
            <p className="mb-8">
              <span className="font-bold"> Fees: </span>
              {doctor.fees} -/৳
            </p>
            <span>
              <Link to={`/admin/edit/doctor/info/${doctor.id}`}>
                <button className="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl mr-3">
                  Edit Info
                </button>
              </Link>

              <button
                onClick={() => {
                  handleDeleteDoctor(doctor.id);
                }}
                className="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl mr-3"
              >
                Delete
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsByAdmin;
