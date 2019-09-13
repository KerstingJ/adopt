import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";

function App(props) {
  return (
    <ViewContainer>
      <Navigation />
      <Route path="/:type" component={PokemonList} />
      <Route path="/Pokemon/:id" component={PokemonCard} />
    </ViewContainer>
  );
}

export default App;

const ViewContainer = styled.div`
  display: flex;
`;
