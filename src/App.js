import "./App.css";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App main-bg">
      <h1 className="head_title">Quiz App</h1>
      <p className="subTitle">
        1000+ quizzes to challenge You and your Friends on all topics?
      </p>
      <div className="mid_image">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-test-7107940-5791768.png"></img>
      </div>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
