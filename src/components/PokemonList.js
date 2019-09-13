import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function PokemonList(props) {
  const [pokeList, setPokeList] = useState([]);

  let type = props.match.params.type;

  useEffect(() => {
    // Update With Type
    // Fetch Pokemon with that type
    console.log(`We Rendered because Type changed to ${type}`);
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then(res => {
        // res.data.pokemon
        setPokeList(res.data.pokemon.map(poke => poke.pokemon).slice(0, 4));
      })
      .catch(console.log);
  }, [type]);

  console.log(pokeList);
  return (
    <ListContainer>
      {pokeList.map(poke => {
        let url_pieces = poke.url.split("/");
        let id = url_pieces[url_pieces.length - 2];

        return (
          <Link key={poke.name} to={`/pokemon/${id}`}>
            {poke.name}
          </Link>
        );
      })}
    </ListContainer>
  );
}

export default PokemonList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
