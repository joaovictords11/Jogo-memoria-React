import React from "react";
import useGameContext from "../hooks/useGameContext";

const Card = ({ card }) => {
  const { handleCardClick } = useGameContext();

  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""}`}
      onClick={() => handleCardClick(card)}
    >
      {card.isFlipped ? card.value : "?"}
    </div>
  );
};

export default Card;
