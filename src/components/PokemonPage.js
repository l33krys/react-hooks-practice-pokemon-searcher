import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => setPokemons(data))

  }, [])

  function updateSearch(search) {
    const updates = pokemons.filter((pokemon) => {
      if (pokemon.name.includes(search)) {
        return pokemon
      } else {
        return null
      }
      })
      setPokemons(updates)
    }

  function addPoke(newPoke) {
    setPokemons([...pokemons, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPoke={addPoke} />
      <br />
      <Search updateSearch={updateSearch} />
      <br />
      <PokemonCollection pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
