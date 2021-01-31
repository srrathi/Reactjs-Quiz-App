import React, { useState } from 'react'
import './App.css';
import { EndScreen } from './components/EndScreen';
import { MainMenu } from './components/MainMenu';
import { Quiz } from './components/Quiz';
import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="App center-column">
      <h3 className="heading">Quiz App</h3>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore,name, setName }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
