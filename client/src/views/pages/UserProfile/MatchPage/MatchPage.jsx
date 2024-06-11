import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MatchPage.css';

import foto from "../../../assets/premium-girl.png"

const MatchPage = () => {
  const navigate = useNavigate();

  const handleSayHello = () => {
    // Adicione a lógica para iniciar uma conversa
    console.log('Say Hello');
    // Navegar para a página de chat ou conversa
    navigate('/chat');
  };

  const handleKeepSwiping = () => {
    // Navegar de volta para a página principal para continuar swiping
    navigate('/main');
  };

  return (
    <div className="match-container">
      <div className="match-header">
        <div className="match-images">
          <img src={foto} alt="User 1" className="match-image" />
          <img src={foto} alt="User 2" className="match-image" />
        </div>
        <h2>It's a match, Jake!</h2>
        <p>Start a conversation now with each other</p>
      </div>
      <div className="match-buttons">
        <button className="say-hello-button" onClick={handleSayHello}>Say hello</button>
        <button className="keep-swiping-button" onClick={handleKeepSwiping}>Keep swiping</button>
      </div>
    </div>
  );
};

export default MatchPage;
