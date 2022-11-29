import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard/SingleCard";
import "./UiMemoryGame.css";

const cardImage = [
  { src: "../src/components/Games/MemoryGame/assets/img/Citron.jpeg", matched: false },
  { src: "../src/components/Games/MemoryGame/assets/img/HanukasCandles.jpg", matched: false },
  { src: "../src/components/Games/MemoryGame/assets/img/Passover.jpeg", matched: false },
  { src: "../src/components/Games/MemoryGame/assets/img/Pomegranate.jpeg", matched: false },
  { src: "../src/components/Games/MemoryGame/assets/img/Purim.jpeg", matched: false },
  { src: "../src/components/Games/MemoryGame/assets/img/SeferTorah.jpeg", matched: false },
  { src: "../src/components/Games/MemoryGame/assets/img/Shofar.jpeg", matched: false },
  { src: "../src/components/Games/MemoryGame/assets/img/TishaBav.jpeg", matched: false },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  function handelChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
    console.log(turns);
  }

  return (
    <div className="magicCard">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns} </p>
      <div className="cardGrid">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handelChoice={handelChoice}
              flipped={card == choiceOne || card == choiceTwo || card.matched}
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MemoryGame;
