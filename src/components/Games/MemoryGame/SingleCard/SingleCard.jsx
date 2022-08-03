import React, { useState } from "react";
import "./SingleCard.css";

function SingleCard(props) {
  const { card, handelChoice, flipped, disabled } = props;

  function handelClick(e) {
    if (!disabled) {
      handelChoice(card);
    }
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src={card.src}
          alt={`${card.id}-card front`}
          onClick={handelClick}
        />
        <img
          className="back"
          src="img/memoryGameImg/cover.jpeg"
          alt={`${card.id}-card cover`}
          onClick={handelClick}
        />
      </div>
    </div>
  );
}
export default SingleCard;
