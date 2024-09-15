import React from "react";
import Card from "./Card";
import useGameContext from "../hooks/useGameContext";

const Board = () => {
  const { cards } = useGameContext();

  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Board;
