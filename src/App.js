import React, { useState, useEffect, createContext } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Admin from './component/Admin/MainAdmin/Admin';
import Calender from './component/Calender/Calender';
import MainDiv from './component/Client/MainDiv/MainDiv';
import Login from './component/Login/Login';
import PrivateRoutes from './component/PrivateRoutes/PrivateRoutes';

export const apiContext = createContext();

function App() {
  const [verifyUser, setVerifyUser] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(()=>{

    if (location?.state?.from) {
      navigate(location.state.from, { replace: true });
    }
  },[location?.state?.from,navigate])

  return (
    <div className="App">
      <apiContext.Provider value={[verifyUser, setVerifyUser]}>
        <Routes>
          <Route path="/" element={<MainDiv />} />
          <Route path="/create/user" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/admin/page" element={<Admin />} />
            <Route path="/calender/view" element={<Calender />} />
          </Route>
        </Routes>
      </apiContext.Provider>
    </div>
  );
}

export default App;
