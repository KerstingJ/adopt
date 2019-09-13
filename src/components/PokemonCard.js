import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({});

  console.log(props);
  let id = props.match.params.id;

  console.log("ID", id);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => {
        console.log(res);
      })
      .catch(console.log);
  }, [id]);

  return <h2>Pokemon Card</h2>;
}

export default PokemonCard;
