import React, { useState } from 'react';
import Button from './button';
import './App.css';
import ImageSlider from './ImageSlider';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [glowClicked, setGlowClicked] = useState(false);
  const [pulseClicked, setPulseClicked] = useState(false);
  const [flipClicked, setFlipClicked] = useState(false);

  const handleButtonClick = (effect) => {
    setClickCount(clickCount + 1);

    // Apply different effects based on the button clicked
    switch (effect) {
      case "glow":
        setGlowClicked(true);
        setTimeout(() => setGlowClicked(false), 500);
        break;
      case "pulse":
        setPulseClicked(true);
        setTimeout(() => setPulseClicked(false), 500);
        break;
      case "flip":
        setFlipClicked(true);
        setTimeout(() => setFlipClicked(false), 500);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>React Button Effects</h1>
      <div className="button-container">
        <Button
          buttonStyle={`button-primary ${glowClicked ? 'glow' : ''}`}
          onClick={() => handleButtonClick("glow")}
        >
          Click Me!
        </Button>
        <Button
          buttonStyle={`button-secondary ${pulseClicked ? 'pulse' : ''}`}
          onClick={() => handleButtonClick("pulse")}
        >
          Click Me Too!
        </Button>
        <Button
          buttonStyle={`button-tertiary ${flipClicked ? 'flip' : ''}`}
          onClick={() => handleButtonClick("flip")}
        >
          No, Click Me!
        </Button>
        <Button buttonStyle="button-hover" onClick={() => handleButtonClick()}>
          Hover Me!
        </Button>
      </div>
      <ImageSlider />
    </div>
  );
}

export default App;
