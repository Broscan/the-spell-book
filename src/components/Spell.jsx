import React, { useState } from "react";

function Spell(props) {
  function handleClick() {
    props.onSpellCast(props.name);

    const cardContainer = document.querySelector(".onCast");

    const cardHtml = `<p>${props.name} was cast!</p>`;

    cardContainer.innerHTML = cardHtml;
  }

  return (
    <>
      <div className="onCast"></div>
      <div className="spell-cards">
        <div className="spell-card">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <button onClick={() => handleClick()}>Cast spell!</button>
          <button onClick={() => props.onRemoveSpell(props.name)}>
            Remove spell
          </button>
        </div>
      </div>
    </>
  );
}

export default Spell;
