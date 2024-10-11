import React from 'react';
import './App.css';  // Import custom styles
import repeatTextImg from './images/repeatText.png';
import telegramIcon from './images/telegram.png';


function App() {
  return (
   <div className="App">
      <header className="hero">
        <div className="hero-content">
          {/* Layered image */}
          <img src={repeatTextImg} alt="Repeat Text" className="centered-image" />
<button className="hero-button">
      <img src={telegramIcon} alt="Telegram Icon" className="button-icon" />
      GOT GAME?
    </button>
    <p className="telegram-text">PLAY NOW ON TELEGRAM</p> {/* New text */}
        </div>

      </header>
    </div>
  );
}
export default App;