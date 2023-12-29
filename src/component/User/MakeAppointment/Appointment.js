import React from 'react';
import OurDepartments from '../Appointment/OurDepartments';
import Footer from '../Footer/Footer';
import OurDoctorFor from '../Appointment/OurDoctorsYou';
import Navbar from '../Navbar/Navbar';

const Appointment = () => {
  return (
    <div>
    <Navbar/>
      <OurDepartments/>   
      <OurDoctorFor/>
      <Footer/>
    </div>
  );
};

export default Appointment;

