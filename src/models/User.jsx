const users = [];

const addUser = (userData) => {
  const user = {
    id: userData.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    age: userData.age,
    email: userData.email,
    gender: userData.gender,
    bio: userData.bio,
    photos: userData.photos, // Array de URLs de fotos
    profile_photo: userData.profile_photo, // URL da foto de perfil
    location: userData.location, // Localização como objeto {lat, lng}
    preferences: userData.preferences, // Preferências como objeto { genderPreference, ageRange, distance }
  };
  users.push(user);
  return user;
};

const getUsers = () => {
  return users;
};

export { addUser, getUsers };
