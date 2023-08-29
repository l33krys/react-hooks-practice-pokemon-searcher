import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const { name, sprites, hp } = pokemon
  const { front, back } = sprites
  const [face, setFace] = useState(true)

  function handleClick() {
    setFace(!face)
  }


  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={face ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
