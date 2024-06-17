import axios from "axios";

const API_URL = "https://tinder-back.loca.lt/api/Matches/"; // Altere para o URL da sua API de backend

// Função para obter os matches de um usuário por ID
export const getMatchesByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching matches:", error);
    throw error; // Você pode tratar o erro conforme necessário na sua aplicação
  }
};
