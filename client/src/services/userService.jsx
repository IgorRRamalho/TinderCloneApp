import axios from "axios";

// const API_URL = 'http://localhost:5122/api/Users/';
const API_URL = "https://tinder-back.loca.lt/api/Users/";

// Função para obter usuários
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

// Função para adicionar um novo usuário
export const addUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
    throw error;
  }
};

// Função para obter usuário por email
export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_URL}email/${email}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário pelo email:", error);
    throw error;
  }
};

// Função para obter matches potenciais
export const getPotentialMatches = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}${userId}/matchesPotenciais`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar matches potenciais:", error);
    throw error;
  }
};
