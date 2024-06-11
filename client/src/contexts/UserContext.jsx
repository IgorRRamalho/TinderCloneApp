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
    bio: "",
    photos: [],
    profile_photo: "",
    location: { pais: "Brasil", cep: "", cidade: "", uf: "" },
    preferences: { genderAttraction: "", ageRange: "", maxDistance: "" },
    interests: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
