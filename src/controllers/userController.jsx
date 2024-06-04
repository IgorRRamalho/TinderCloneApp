import { addUser, getUsers } from "../services/Api";

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
