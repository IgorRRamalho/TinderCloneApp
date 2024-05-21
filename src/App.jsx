import { useState } from "react";
import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Onboarding from "./pages/OnboargingPage/Onboarding.jsx";
import SignUp from "./pages/SignUpPage/SignUp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;