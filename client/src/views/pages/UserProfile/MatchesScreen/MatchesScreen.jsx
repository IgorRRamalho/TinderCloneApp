import React, { useEffect, useState } from "react";
import { handleGetMatchesByID } from "../../../../contexts/controllers/matchesController";
import { extractUserIdFromURL } from "../../../../contexts/controllers/userController";
import MainFotter from "../../../components/MainFotter/MainFotter";
import "./MatchesScreen.css";

import foto from "./btn.png";

/*
========================================================================
  Tela de Matches
  
  Esta tela exibe os matches do usuário.
  
  Autor: Igor Rosa e Giovanna
  Data: 08 de Junho de 2024
  Versão: 1.8
========================================================================
*/

const MatchesScreen = () => {
  const [matches, setMatches] = useState([]);
  const userId = extractUserIdFromURL();
  console.log(userId);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const matchesData = await handleGetMatchesByID(userId);
        setMatches(matchesData);
      } catch (error) {
        console.error("Erro ao obter matches do usuario:", error);
      }
    };

    fetchMatches();
  }, [userId]);

  if (!userId) {
    return <div>Loading...</div>;
  } else
    return (
      <div className="container">
        <div className="matches-screen">
          <div className="header">
            <h1>Matches</h1>
            <img src={foto} alt="" />
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
        <MainFotter userId={userId} activeScreen="match" />
      </div>
    );
};

export default MatchesScreen;
