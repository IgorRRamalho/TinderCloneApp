import React, {createContext, useState} from "react";


const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        gender: '',
        bio: '',
        photos: '',
        profile_photo: '',
        location: { lat: '', lng: '' },
        preferences: { genderPreference: '', ageRange: '', distance: ''} ,
        

    });

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export {UserContext, UserProvider};