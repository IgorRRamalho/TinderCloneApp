import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';

import BasicInfoPage from "./views/pages/UserEditForm/BasicInfoPage/BasicInfoPage";
import GenderPage from "./views/pages/UserEditForm/GenderPage/GenderPage";
import SignUp from "./views/pages/SignUp/SignUp";
import Onboarding from "./views/pages/Onboarding/Onboarding";
import InterestsPage from "./views/pages/UserEditForm/PassionsPage/InterestsPage";
import MainPage from "./views/pages/UserProfile/MainPage/MainPage";
import MatchPage from "./views/pages/UserProfile/MatchPage/MatchPage";
import ImageUploadPage from "./views/pages/UserEditForm/ImageUploadPage/ImageUploadPage";
import UserProfilePage from "./views/pages/UserProfile/UserProfilePage/UserProfilePage";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/basic-info" element={<BasicInfoPage />}/>
          <Route path="/gender" element={<GenderPage/>}/>
          <Route path="/interests" element={<InterestsPage/>}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/match" element={<MainPage/>}/>
          <Route path="/upload" element={<ImageUploadPage />}/>
          <Route path="/user/:userId" element={<UserProfilePage />}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
