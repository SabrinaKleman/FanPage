import React from 'react';
import './App.css';  // Import custom styles
import repeatTextImg from './images/repeatText.png'; // Adjust your import paths
import telegramIcon from './images/telegram.png';
import iphoneImage from './images/phone.png'; // Ensure this matches the correct file name

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          {/* Centered image */}
          <img src={repeatTextImg} alt="Repeat Text" className="centered-image" />

          {/* Button with image */}
          <button className="hero-button">
            <img src={telegramIcon} alt="Telegram Icon" className="button-icon" />
            GOT GAME?
          </button>
          
          {/* Text below the button */}
          <p className="telegram-text">PLAY NOW ON TELEGRAM</p>
        </div>
      </header>
      
      {/* Bottom iPhone image */}
      <div className="bottom-image-container">
        <img src={iphoneImage} alt="iPhone" className="bottom-image" />
      </div>
    </div>
  );
}

export default App;
