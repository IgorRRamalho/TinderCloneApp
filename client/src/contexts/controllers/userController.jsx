import { addUser, getUsers, getUserByEmail, getPotentialMatches } from "../../services/userService";

export const handleAddUser = async (userData) => {
  try {
    const newUser = await addUser(userData);
    return newUser;
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    throw error;
  }
};

export const handleGetUsers = () => {
  return getUsers();
};

export const handleGetUserByEmail = async (email) => {
  try {
    const user = await getUserByEmail(email);
    return user;
  } catch (error) {
    console.error('Erro ao obter usuário pelo email:', error);
    throw error;
  }
};

export const handleGetPotentialMatches = async (userId) => {
  try {
    const potentialMatches = await getPotentialMatches(userId);
    return potentialMatches;
  } catch (error) {
    console.error('Erro ao obter matches potenciais:', error);
    throw error;
  }
};
