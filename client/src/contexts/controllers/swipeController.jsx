import { addSwipe } from "../../services/swipeService";

// Função para adicionar um swipe
export const handleAddSwipe = async (swipeData) => {
  try {
    const newSwipe = await addSwipe(swipeData);
    return newSwipe;
  } catch (error) {
    console.error("Erro ao adicionar swipe:", error);
    throw error;
  }
};
