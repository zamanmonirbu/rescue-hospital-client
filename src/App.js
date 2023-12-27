import React, { useState,  createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './screen/Admin';
import MainDiv from './component/MainDiv/MainDiv';
import Login from './component/Login/Login';
import PrivateRoutes from './Auth/PrivateRoutes/PrivateRoutes';
import Calender from './screen/Appointment';
import RegistrationPage from './component/Registration/Registration';
import Test from './Auth/Test';
import DoctorsDataInputForm from './screen/DoctorsDataInputForm';
import DoctorsInfoDisplay from './screen/ShowDoctors';
import DoctorsBySpecialist from './component/FilterDoctor/SearchBySpecialty';

export const apiContext = createContext();

function App() {
  const [verifyUser, setVerifyUser] = useState(false);
  return (
    <div className="App">
      <apiContext.Provider value={[verifyUser, setVerifyUser]}>
        <Routes>
          <Route path="/" element={<MainDiv/>} />
          <Route path="/user/login" element={<Login/>} />
          <Route path="/user/register" element={<RegistrationPage/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/doctor/data/input" element={<DoctorsDataInputForm/>} />
          <Route path="/show/doctors" element={<DoctorsInfoDisplay/>} />
          <Route path="/doctor/:specialistCategory" element={<DoctorsBySpecialist/>} />
          <Route path="/doctor/appointment/:id" element={<Login/>} />
          
          <Route element={<PrivateRoutes/>}>
          <Route path="/admin/page" element={<Admin/>}/>
            <Route path="/appointment" element={<Calender/>}/>


          </Route>         
        </Routes>
      </apiContext.Provider>
    </div>
  );
}

export default App;
