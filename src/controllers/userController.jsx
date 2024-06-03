import { addUser, getUsers } from '../models/userModel';

export const handleAddUser = (userData) => {
  const newUser = addUser(userData);
  return newUser;
};

export const handleGetUsers = () => {
  return getUsers();
};
