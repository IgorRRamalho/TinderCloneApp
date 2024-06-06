import { useState } from "react";
import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Onboarding from "./pages/OnboargingPage/Onboarding.jsx";
//import SignUp from "./pages/SignUpPage/SignUp.jsx";
import BasicInfoPage from "./views/pages/UserEditForm/BasicInfoPage/BasicInfoPage";
import GenderPage from "./views/pages/UserEditForm/GenderPage/GenderPage";
import SignUp from "./views/pages/SignUp/SignUp";
import Onboarding from "./views/pages/Onboarding/Onboarding";
import LocationPage from "./views/pages/UserEditForm/LocationPage/LocationPage";
import PreferencesPage from "./views/pages/UserEditForm/PreferencesPage/PreferencesPage";
import PassionsPage from "./views/pages/UserEditForm/PassionsPage/PassionsPage";
import MainPage from "./views/pages/UserProfile/MainPage/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Onboarding />} />
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/basic-info" element={<BasicInfoPage />}/>
        <Route path="/gender" element={<GenderPage/>}/>
        <Route path="/location" element={<LocationPage/>}/>
        <Route path="/preferences" element={<PreferencesPage/>}/>
        <Route path="/passions" element={<PassionsPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
