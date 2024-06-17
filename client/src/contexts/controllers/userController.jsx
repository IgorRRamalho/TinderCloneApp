import {
  addUser,
  getUsers,
  getUserByEmail,
  getPotentialMatches,
} from "../../services/userService";

// Função para extrair o ID do usuário da URL
export const extractUserIdFromURL = () => {
  const url = window.location.href;
  const lastSegment = url
    .split("/")
    .filter((segment) => segment !== "")
    .pop();
  return lastSegment;
};

export const handleAddUser = async (userData) => {
  try {
    const newUser = await addUser(userData);
    return newUser;
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
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
    console.error("Erro ao obter usuário pelo email:", error);
    throw error;
  }
};

export const handleGetPotentialMatches = async () => {
  try {
    const userId = extractUserIdFromURL();
    const potentialMatches = await getPotentialMatches(userId);
    return potentialMatches;
  } catch (error) {
    console.error("Erro ao obter matches potenciais:", error);
    throw error;
  }
};
