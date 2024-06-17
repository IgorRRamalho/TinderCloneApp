import { getMatchesByUserId } from "../../services/matchesService";

export const handleGetMatchesByID = async (userId) => {
  try {
    const matches = await getMatchesByUserId(userId);
    return matches;
  } catch (error) {
    console.error("Erro ao obter matches do usuario:", error);
    throw error;
  }
};
