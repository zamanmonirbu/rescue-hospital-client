import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./screen/Admin/AdminHome";
import MainDiv from "./component/User/MainDiv/MainDiv";
import PrivateRoutes from "./Auth/PrivateRoutes/PrivateRoutes";
import Appointment from "./component/User/MakeAppointment/Appointment";
import Test from "./Auth/Test";
import DoctorsDataInputForm from "./screen/Admin/DoctorsDataInput";
import DoctorsInfoDisplay from "./component/User/ShowDoctors/ShowDoctors";
import AppointmentFinal from "./component/User/Appointment/AppointmentFinal";
import SingleDoctor from "./component/User/SingleDoctor/SingleDoctor";
import AdminShowDoctors from "./screen/Admin/DoctorsByAdmin";
import AboutMore from "./component/User/AboutMore/AboutMore";
import LatestNewsSection from "./component/User/LatestNewsMore/LatestMore";
import Login from "./Auth/Login/Login";
import RegistrationPage from "./Auth/Registration/Registration";
import DoctorsBySpecialist from "./component/User/FilterDoctor/SearchBySpecialty";

export const apiContext = createContext();

function App() {
  const [verifyUser, setVerifyUser] = useState(false);
  return (
    <div className="App">
      <apiContext.Provider value={[verifyUser, setVerifyUser]}>
        <Routes>
          <Route path="/" element={<MainDiv />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<RegistrationPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/doctor/data/input" element={<DoctorsDataInputForm />} />
          <Route
            path="/doctor/:specialistCategory"
            element={<DoctorsBySpecialist />}
          />
          <Route path="/admin/show/doctors/" element={<AdminShowDoctors />} />

          <Route path="/show/doctors" element={<DoctorsInfoDisplay />} />
          <Route path="/hospital/about/more" element={<AboutMore />} />
          <Route path="/see/more/latest/news" element={<LatestNewsSection />} />
          <Route path="doctor/:name/:id" element={<SingleDoctor />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/admin/page" element={<Admin />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route
              path="/doctor/appointment/:doctorId"
              element={<AppointmentFinal />}
            />
          </Route>
        </Routes>
      </apiContext.Provider>
    </div>
  );
}

export default App;
