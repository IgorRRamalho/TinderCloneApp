// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { UserIdProvider } from "./contexts/UserIdContext";

import BasicInfoPage from "./views/pages/UserEditForm/BasicInfoPage/BasicInfoPage";
import GenderPage from "./views/pages/UserEditForm/GenderPage/GenderPage";
import SignUp from "./views/pages/SignUp/SignUp";
import Onboarding from "./views/pages/Onboarding/Onboarding";
import InterestsPage from "./views/pages/UserEditForm/PassionsPage/InterestsPage";
import MainPage from "./views/pages/UserProfile/MainPage/MainPage";
import MatchesScreen from "./views/pages/UserProfile/MatchesScreen/MatchesScreen";
import ImageUploadPage from "./views/pages/UserEditForm/ImageUploadPage/ImageUploadPage";
import UserProfilePage from "./views/pages/UserProfile/UserProfilePage/UserProfilePage";

function App() {
  return (
    <UserProvider>
      <UserIdProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/basic-info" element={<BasicInfoPage />} />
            <Route path="/gender" element={<GenderPage />} />
            <Route path="/interests" element={<InterestsPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/match" element={<MatchesScreen />} />
            <Route path="/upload" element={<ImageUploadPage />} />
            <Route path="/user" element={<UserProfilePage />} />
          </Routes>
        </BrowserRouter>
      </UserIdProvider>
    </UserProvider>
  );
}

export default App;
