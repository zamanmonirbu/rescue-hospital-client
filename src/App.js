import React, { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./screen/Admin/AdminHome";
import MainDiv from "./component/User/MainDiv/MainDiv";
import UserPrivateRoutes from "./Auth/PrivateRoutes/UserPrivateRoutes";
import Appointment from "./component/User/MakeAppointment/Appointment";
import Test from "./Auth/Test";
import DoctorsDataInputForm from "./screen/Admin/DoctorsDataInput";
import AppointmentFinal from "./component/User/Appointment/AppointmentFinal";
import SingleDoctor from "./component/User/SingleDoctor/SingleDoctor";
import AboutMore from "./component/User/AboutMore/AboutMore";
import LatestNewsSection from "./component/User/LatestNewsMore/LatestMore";
import UserLogin from "./Auth/Login/UserLogin";
import RegistrationPage from "./Auth/Registration/Registration";
import DoctorsBySpecialist from "./component/User/FilterDoctor/SearchBySpecialty";
import AdminLogin from "./Auth/Login/AdminLogin";
import DoctorsByAdmin from "./screen/Admin/DoctorsByAdmin";
import UpdateDoctorInfos from "./screen/Admin/UpdateDoctorInfos";
import GetAllDoctor from "./component/User/GetAllDoctor/GetAllDoctor";

export const apiContext = createContext();

function App() {
  const [verifyUser, setVerifyUser] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userDetails");
    if (storedUserData) {
      const parsedUser = JSON.parse(storedUserData);
      setVerifyUser(parsedUser);
    }
  }, [setVerifyUser]);

  return (
    <div className="App">
      <apiContext.Provider value={[verifyUser, setVerifyUser]}>
        <Routes>
          <Route path="/" element={<MainDiv />} />
          <Route path="/user/register" element={<RegistrationPage />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/doctor/:specialistCategory" element={<DoctorsBySpecialist />}/>
          <Route path="/doctor/:name/:id" element={<SingleDoctor />} />
          <Route path="/show/doctors" element={<GetAllDoctor/>} />
          <Route path="/hospital/about/more" element={<AboutMore />} />
          <Route path="/see/more/latest/news" element={<LatestNewsSection />} />
          <Route path="/test" element={<Test />} />



          <Route element={<UserPrivateRoutes />}>
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/doctor/appointment/:doctorId" element={<AppointmentFinal />} />
            <Route path="/admin/page" element={<Admin />} />
            <Route path="/admin/page/doctors/admin" element={<DoctorsByAdmin/>} />
            <Route path="/admin/edit/doctor/info/:id" element={<UpdateDoctorInfos/>} />
            <Route path="/doctor/data/input" element={<DoctorsDataInputForm />} />
          </Route>
        </Routes>
      </apiContext.Provider>
    </div>
  );
}

export default App;
