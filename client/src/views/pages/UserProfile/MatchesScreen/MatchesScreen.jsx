/*
============================================================================
  Tela de Matches
  
  Esta tela exibe os matches do usuário.
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
============================================================================
*/
import React, { useEffect, useState, useContext } from "react";
import { handleGetMatchesByID } from "../../../../contexts/controllers/matchesController";
import MainFotter from "../../../components/MainFotter/MainFotter";
import { UserIdContext } from "../../../../contexts/UserIdContext";
import "./MatchesScreen.css";

import foto from "./btn.png";

const MatchesScreen = () => {
  const { userId } = useContext(UserIdContext);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const matchesData = await handleGetMatchesByID(userId);
        setMatches(matchesData);
      } catch (error) {
        console.error("Erro ao obter matches do usuario:", error);
      }
    };

    if (userId) {
      fetchMatches();
    }
  }, [userId]);

  if (!userId) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <div className="matches-screen">
          <div className="header">
            <h1>Matches</h1>
            <img src={foto} alt="Icon" />
            <p>This is a list of people who have liked you and your matches.</p>
          </div>

          {matches.length > 0 ? (
            <div className="matches-list">
              {matches.map((match) => (
                <div className="match" key={match.id}>
                  <img src={match.profile_photo} alt={match.name} />
                  <div className="match-info">
                    <p>
                      {match.name}, {match.age}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-matches">
              <p>No matches found.</p>
            </div>
          )}
        </div>
        <MainFotter activeScreen="match" />
      </div>
    );
  }
};

export default MatchesScreen;
