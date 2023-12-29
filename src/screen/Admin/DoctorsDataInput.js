import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";
import { useNavigate } from "react-router-dom";

const DoctorsDataInputForm = () => {
  const navigate = useNavigate();
  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    specialist: "",
    age: "",
    email: "",
    experience: "",
    drImage: "",
    studiedFrom: "",
    openForWork: {
      Friday: { from: "", to: "" },
      Saturday: { from: "", to: "" },
      Sunday: { from: "", to: "" },
      Monday: { from: "", to: "" },
      Tuesday: { from: "", to: "" },
      Wednesday: { from: "", to: "" },
      Thursday: { from: "", to: "" },
    },
    fees: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo({ ...doctorInfo, [name]: value });
  };

  const handleTimeChange = (day, field, value) => {
    setDoctorInfo({
      ...doctorInfo,
      openForWork: {
        ...doctorInfo.openForWork,
        [day]: { ...doctorInfo.openForWork[day], [field]: value },
      },
    });
  };

  const handleTimeClockChange = (day, field, time) => {
    handleTimeChange(day, field, time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const doctorInfoSave = await addDoc(
        collection(db, "doctors"),
        doctorInfo
      );
      if (doctorInfoSave.id) {
        alert("Dr Data Inserted");
        navigate("/admin/page");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="bg-gray-100 py-8 ">
      <h1 className="text-2xl text-center text-red-500 mb-4">Add A Doctor</h1>
      <div className="max-w-xl mx-auto p-4 border rounded-md shadow-lg">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={doctorInfo.name}
          onChange={handleInputChange}
          className="w-full border p-2 mb-2"
        />

        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={doctorInfo.age}
          onChange={handleInputChange}
          className="w-full border p-2 mb-2"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={doctorInfo.email}
          onChange={handleInputChange}
          className="w-full border p-2 mb-2"
        />

        <label>Experience:</label>
        <input
          type="text"
          name="experience"
          value={doctorInfo.experience}
          onChange={handleInputChange}
          className="w-full border p-2 mb-2"
        />
        <label>Image Url:</label>
        <input
          type="text"
          name="drImage"
          value={doctorInfo.drImage}
          onChange={handleInputChange}
          className="w-full border p-2 mb-2"
        />

        <label>Studied From:</label>
        <input
          type="text"
          name="studiedFrom"
          value={doctorInfo.studiedFrom}
          onChange={handleInputChange}
          className="w-full border p-2 mb-2"
        />

        <label>Specialist:</label>
        <select
          name="specialist"
          value={doctorInfo.specialist}
          onChange={handleInputChange}
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

        <span className="text-red-500">Open for Work:</span>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {Object.keys(doctorInfo.openForWork).map((day) => (
            <div key={day}>
              <p>{day}:</p>
              From:
              <input
                type="time"
                value={doctorInfo.openForWork[day].from}
                onChange={(e) =>
                  handleTimeClockChange(day, "from", e.target.value)
                }
                className="border p-2"
              />{" "}
              <br />
              <span className="pr-4">To: </span>
              <input
                type="time"
                value={doctorInfo.openForWork[day].to}
                onChange={(e) =>
                  handleTimeClockChange(day, "to", e.target.value)
                }
                className="border p-2"
              />
            </div>
          ))}
        </div>

        <label>Fees:</label>
        <input
          type="text"
          name="fees"
          value={doctorInfo.fees}
          onChange={handleInputChange}
          className="w-full border p-2 mb-2"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DoctorsDataInputForm;
