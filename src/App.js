import React from 'react';
import './App.css';  // Import custom styles
import game1 from './images/Game1.png';
import game2 from './images/Game2.png';
import game3 from './images/Game3.png';
import game4 from './images/Game4.png';
import telegramIcon from './images/telegram.png';
import iphoneImage from './images/phone.png'; // Ensure this matches the correct file name
import iphoneVideo from './images/phone.mp4';
import ctaButtonSvg from './images/ctaButton_responsive.svg'; // Import your SVG

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          {/* h2 above the game images */}
          <h2>IT'S</h2>
          {/* Grouped images */}
          <div className="game-images">
            <img src={game4} alt="Game 4" className="game-image game4" />
            <img src={game3} alt="Game 3" className="game-image game3" />
            <img src={game2} alt="Game 2" className="game-image game2" />
            <img src={game1} alt="Game 1" className="game-image game1" />
          </div>

          {/* h1 below the game images */}
          <h1>TIME</h1>

          {/* Button with image */}
          <button className="hero-button">
            <img src={ctaButtonSvg} alt="CTA Button" className="button-icon" />
          </button>

          {/* Text below the button */}
          <p className="telegram-text">PLAY NOW ON TELEGRAM</p>
        </div>
      </header>
       {/* Bottom image*/}
      <div className="bottom-image-container">
        <img src={iphoneImage} alt="iPhone" className="bottom-image" />
      </div>
    </div>
  );
}

export default App;
