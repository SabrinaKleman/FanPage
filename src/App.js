import React from 'react';
import './App.css';  // Import custom styles
import repeatTextImg from './images/repeatText.png';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1>Game Time</h1>
          <button className="hero-button">Get Started</button>
        </div>
        <img src={repeatTextImg} alt="Repeat Text" className="centered-image" /> {/* Add the image */}
      </header>
    </div>
  );
}

export default App;