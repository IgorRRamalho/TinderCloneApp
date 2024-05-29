import { useState } from "react";
import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Onboarding from "./pages/OnboargingPage/Onboarding.jsx";
import SignUp from "./pages/SignUpPage/SignUp.jsx";
import CreateAccount from "./pages/CreateAccountPage/CreateAccount.jsx";
import GenderPage from "./pages/CreateAccountPage/GenderPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CreateAccount" element={<CreateAccount />}/>
        <Route path="/gender" element={<GenderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
