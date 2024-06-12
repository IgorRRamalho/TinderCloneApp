import React, { createContext, useState } from "react";

// Criando o contexto
const UserContext = createContext();

// Provedor do contexto
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    gender: "",
    photos: [],
    profile_photo: "",
    interests: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
