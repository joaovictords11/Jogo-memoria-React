import { toast } from "react-toastify";
import useGameContext from "../hooks/useGameContext";
import Board from "./Board";

const Game = () => {
  const { handleRestart, chances, result, cards } = useGameContext();

  return (
    <div className="game">
      <Board />
      {chances === 0 ? (
        <p>Suas tentativas acabaram :(</p>
      ) : result === cards.length ? (
        <h2>Parabéns, você ganhou!</h2>
      ) : (
        <p>Você possui {chances} tentativa(s)</p>
      )}
      <button className="btn" onClick={handleRestart}>
        Reiniciar
      </button>
    </div>
  );
};

export default Game;
