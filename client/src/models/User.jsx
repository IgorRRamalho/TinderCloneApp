let users = [];

// Função para adicionar usuário
const addUser = (userData) => {
  const user = {
    firstName: userData.name.split(' ')[0], // Primeiro nome
    lastName: userData.name.split(' ')[1], // Último nome
    age: userData.age,
    email: userData.email,
    gender: userData.gender,
    photos: userData.photos, // Array de URLs de fotos
    profile_photo: userData.profile_photo, // URL da foto de perfil
    interests: userData.interests, // IDs das preferências
  };
  users.push(user);
  return user;
};

// Função para obter lista de usuários
const getUsers = () => {
  return users;
};

export { addUser, getUsers };
