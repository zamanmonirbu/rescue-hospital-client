import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";

const UpdateDoctorInfos = () => {
  const { id } = useParams();
  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    age: "",
    email: "",
    experience: "",
    drImage: "",
    studiedFrom: "",
    specialist: "",
  });

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const doctorRef = doc(db, "doctors", id);
        const doctorSnapshot = await getDoc(doctorRef);

        if (doctorSnapshot.exists()) {
          const doctorData = doctorSnapshot.data();
          setDoctorInfo(doctorData);
        } else {
          console.log("Doctor not found");
        }
      } catch (error) {
        console.error("Error fetching doctor data: ", error);
      }
    };

    fetchDoctorData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const doctorRef = doc(db, "doctors", id);
      await updateDoc(doctorRef, doctorInfo);
      console.log("Doctor information updated successfully!");
    } catch (error) {
      console.error("Error updating doctor information: ", error);
    }
  };

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl text-center text-red-500 mb-4">
        Edit Doctor's Info
      </h2>
      <div className="max-w-xl mx-auto p-4 border rounded-md shadow-lg">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={doctorInfo.name}
          onChange={(e) =>
            setDoctorInfo({ ...doctorInfo, name: e.target.value })
          }
          className="w-full border p-2 mb-2"
        />

        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={doctorInfo.age}
          onChange={(e) =>
            setDoctorInfo({ ...doctorInfo, age: e.target.value })
          }
          className="w-full border p-2 mb-2"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={doctorInfo.email}
          onChange={(e) =>
            setDoctorInfo({ ...doctorInfo, email: e.target.value })
          }
          className="w-full border p-2 mb-2"
        />

        <label>Experience:</label>
        <input
          type="text"
          name="experience"
          value={doctorInfo.experience}
          onChange={(e) =>
            setDoctorInfo({ ...doctorInfo, experience: e.target.value })
          }
          className="w-full border p-2 mb-2"
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="drImage"
          value={doctorInfo.drImage}
          onChange={(e) =>
            setDoctorInfo({ ...doctorInfo, drImage: e.target.value })
          }
          className="w-full border p-2 mb-2"
        />

        <label>Studied From:</label>
        <input
          type="text"
          name="studiedFrom"
          value={doctorInfo.studiedFrom}
          onChange={(e) =>
            setDoctorInfo({ ...doctorInfo, studiedFrom: e.target.value })
          }
          className="w-full border p-2 mb-2"
        />

        <label>Specialist:</label>
        <select
          name="specialist"
          value={doctorInfo.specialist}
          onChange={(e) =>
            setDoctorInfo({ ...doctorInfo, specialist: e.target.value })
          }
          className="w-full border p-2 mb-4"
        >
          <option value="">Select Specialist</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Laboratory">Laboratory</option>
          <option value="Internal Medicine">Internal Medicine</option>
          <option value="Dentistry">Dentistry</option>
          <option value="Radiology">Radiology</option>
          <option value="Orthopedic">Orthopedic</option>
        </select>

        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateDoctorInfos;
