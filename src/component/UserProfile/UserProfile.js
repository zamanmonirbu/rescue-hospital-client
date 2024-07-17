// UserProfile.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
// import { apiContext } from '../../App';
import { auth, db } from '../../Auth/Firebase/app.config';
import { signOut } from 'firebase/auth';


const UserProfile = () => {
  const { uid } = useParams();
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
    const navigate=useNavigate();

  useEffect(() => {
    // Fetch user details
    const storedUserData = localStorage.getItem('userDetails');
    if (storedUserData) {
      const parsedUser = JSON.parse(storedUserData);
      if (parsedUser.uid === uid) {
        setUser(parsedUser);
      }
    }

    // Fetch appointments from Firestore
    const fetchAppointments = async () => {
      try {
        const appointmentsRef = collection(db, 'appointments');
        const q = query(appointmentsRef, where('patientId', '==', uid));
        const querySnapshot = await getDocs(q);

        const appointmentsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAppointments(appointmentsList);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [uid]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userDetails");
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {});
  };

  return (
    <div className="container mx-auto p-4">
        <Link to={'/'} className='p-4 bg-green-400 rounded-xl'>Go Home</Link>
        <button onClick={handleLogOut} className='bg-red-600 ml-8 p-3 rounded-xl'>Logout</button>
      <div className="flex flex-col items-center">
        <img src={user.photoURL} alt="User" className="h-24 w-24 rounded-full mb-4" />
        <h1 className="text-2xl font-semibold">{user.displayName}</h1>
        <p className="text-lg">{user.email}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Appointments</h2>
        {appointments.length > 0 ? (
          <ul className="space-y-2">
            {appointments.map(appointment => (
              <li key={appointment.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p><strong>Patient:</strong> {appointment.patientName}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Doctor:</strong> <Link to={`/doctor/profile/${appointment.doctorId}`} className='text-green-600'>{appointment.doctorName }</Link></p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
