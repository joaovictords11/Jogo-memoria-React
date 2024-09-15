import { createContext } from "react";
import { useState } from "react";

export const GameContext = createContext();
GameContext.displayName = "GameContext";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const generateCards = () => {
  const values = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const cards = values.map((value) => ({ value, isFlipped: false }));

  const duplicatedCards = cards
    .concat(cards)
    .map((card, index) => ({ ...card, id: index }));

  return shuffleArray(duplicatedCards);
};

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [chances, setChances] = useState(100);

  const GameValues = {
    cards,
    setCards,
    flippedCards,
    setFlippedCards,
    chances,
    setChances,
    generateCards,
  };

  return (
    <GameContext.Provider value={GameValues}>{children}</GameContext.Provider>
  );
};
