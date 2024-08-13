import React, { useState, useEffect } from "react";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Auth/Firebase/app.config";
import { useParams, useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../Auth/Firebase/app.config";
import Loading from "../component/SideEffects/Loading";
import Navbar from "../component/User/Navbar/Navbar";
import Footer from "../component/User/Footer/Footer";

const DoctorAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState(null);
  const [appointments, setAppointments] = useState([]);

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

    const fetchAppointments = async () => {
      try {
        const q = query(collection(db, "appointments"), where("doctorId", "==", id));
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

    fetchDoctorData();
    fetchAppointments();
  }, [id]);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("doctorInfo");
      navigate("/"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <>
      <Navbar />
      {doctorData ? (
        <div className="bg-gray-100 py-8 flex flex-col items-center min-h-screen">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
            {/* Doctor Information */}
            <div className="p-4 border rounded-md shadow-lg">
              <h2 className="text-2xl text-yellow-500 mb-2 text-center">
                {doctorData.name}
              </h2>
              <img
                src={doctorData.drImage}
                alt={`Dr ${doctorData.name}`}
                className="mt-4 mb-2 rounded-full mx-auto"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <div className="text-left ml-8">
                <p>
                  <span className="font-bold">Specialist:</span> {doctorData.specialist}
                </p>
                <p>
                  <span className="font-bold">Experience:</span> {doctorData.experience} Year
                </p>
                <p>
                  <span className="font-bold">Age:</span> {doctorData.age} Year
                </p>
                <p>
                  <span className="font-bold">Studied:</span> {doctorData.studiedFrom}
                </p>
                <p>
                  <span className="font-bold">Fees:</span> {doctorData.fees} -/৳
                </p>
              </div>
            </div>

            {/* Doctor's Appointments */}
            <div className="p-4 border rounded-md shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Appointments</h3>
              {appointments.length > 0 ? (
                <table className="w-full border-collapse border border-gray-500">
                  <thead>
                    <tr>
                      <th className="border border-gray-500 p-2">Patient Name</th>
                      <th className="border border-gray-500 p-2">Date</th>
                      <th className="border border-gray-500 p-2">Time</th>
                      <th className="border border-gray-500 p-2">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr key={appointment.id} className="border border-gray-500">
                        <td className="border border-gray-500 p-2">{appointment.patientName}</td>
                        <td className="border border-gray-500 p-2">{appointment.date}</td>
                        <td className="border border-gray-500 p-2">{appointment.time}</td>
                        <td className="border border-gray-500 p-2">{appointment.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center">No appointments found for this doctor.</p>
              )}
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/")}
              className="py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Go Home
            </button>
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
};

export default DoctorAdmin;
