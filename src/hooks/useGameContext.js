import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { toast } from "react-toastify";

const useGameContext = () => {
  const {
    cards,
    setCards,
    flippedCards,
    setFlippedCards,
    chances,
    setChances,
    generateCards,
  } = useContext(GameContext);

  const result = cards.filter((card) => card.isFlipped).length;

  const handleCardClick = (clickedCard) => {
    if (result === cards.length) {
      toast.success("Parabéns, Você ganhou!");
      return;
    }

    if (chances === 0) {
      toast.error("Suas tentativas acabaram!");
      return;
    }

    if (flippedCards.length === 2) return;

    const newCardsArray = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );

    setCards(newCardsArray);

    setFlippedCards([...flippedCards, clickedCard]);

    if (flippedCards.length === 1) {
      setTimeout(() => {
        const firstCard = flippedCards[0];

        if (firstCard.value !== clickedCard.value) {
          const resetedCards = cards.map((card) =>
            card.id === clickedCard.id || firstCard.id === card.id
              ? { ...card, isFlipped: false }
              : card
          );

          setCards(resetedCards);
          setChances((prevChances) => prevChances - 1);
        }

        setFlippedCards([]);
      }, 600);
    }
  };

  const handleRestart = () => {
    setChances(12);
    setFlippedCards([]);
    setCards(generateCards());
    toast.success("Jogo reiniciado!");
  };

  return {
    result,
    cards,
    chances,
    handleCardClick,
    handleRestart,
  };
};

export default useGameContext;
