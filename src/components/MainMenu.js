import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function MainMenu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);
  return (
    <div className="MainMenu">
      <input
        type="text"
        className="frm_input"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        className="hero-btn"
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
