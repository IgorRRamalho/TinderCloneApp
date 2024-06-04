// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:5122/api/users';

// Função para obter usuários
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

// Função para adicionar um novo usuário
export const addUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    throw error;
  }
};

// Você pode adicionar mais funções conforme necessário, como atualizar, deletar usuários etc.
