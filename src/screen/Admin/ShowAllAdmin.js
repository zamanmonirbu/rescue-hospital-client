import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";

const ShowAllAdmin = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const adminsCollection = collection(db, "admins");
        const adminsSnapshot = await getDocs(adminsCollection);

        const adminsData = adminsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAdmins(adminsData);
      } catch (error) {
        console.error("Error fetching admins: ", error);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <div className="flex items-center justify-center mb-10">
      <div className="bg-gray-200 p-8 w-[90%] rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin List</h2>
        <ul className="list-decimal pl-4">
          {admins.map((appointment) => (
            <li
              key={appointment.id}
              className="mb-4 p-4 border rounded-md shadow-md bg-slate-50"
            >
              <p>
                <strong>Email:</strong> {appointment.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowAllAdmin;
