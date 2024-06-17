import axios from 'axios';

const API_URL = 'https://tinder-back.loca.lt/api/Swipes/'; // Altere para o URL da sua API de backend

// Função para enviar um swipe
export const addSwipe = async (swipeData) => {
  try {
    const response = await axios.post(`${API_URL}`, swipeData);
    return response.data;
  } catch (error) {
    console.error('Erro ao realizar swipe:', error);
    throw error;
  }
};
