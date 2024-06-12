let users = [];

// Função para adicionar usuário
const addUser = (userData) => {
  const user = {
    id: userData.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    age: userData.age,
    email: userData.email,
    gender: userData.gender,
    photos: userData.photos, // Array de URLs de fotos
    profile_photo: userData.profile_photo, // URL da foto de perfil
    interests: userData.interests, // Preferências como objeto { genderPreference, ageRange, distance }
  };
  users.push(user);
  return user;
};

// Função para obter lista de usuários
const getUsers = () => {
  return users;
};

export { addUser, getUsers };
