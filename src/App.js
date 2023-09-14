import React, { useState,  createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './component/Admin/MainAdmin/Admin';
import MainDiv from './component/Client/MainDiv/MainDiv';
import Login from './component/Login/Login';
import PrivateRoutes from './component/PrivateRoutes/PrivateRoutes';
import Calender from './component/Calender/Calender';

export const apiContext = createContext();

function App() {
  const [verifyUser, setVerifyUser] = useState(true);
  // const navigate = useNavigate();
  // const location = useLocation();

  
  // useEffect(()=>{

  //   if (location?.state?.from) {
  //     navigate(location.state.from, { replace: true });
  //   }
  // },[location?.state?.from,navigate])

  console.log(verifyUser);
  return (
    <div className="App">
      <apiContext.Provider value={[verifyUser, setVerifyUser]}>
        <Routes>
          <Route path="/" element={<MainDiv/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin/page" element={<PrivateRoutes Component={Admin} />}/>
          <Route path="/appointment" element={<PrivateRoutes Component={Calender} />}/>          
        </Routes>
      </apiContext.Provider>
    </div>
  );
}

export default App;
