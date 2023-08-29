import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => setPokemons(data))

  }, [])

  const pokemonsFiltered = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase()))

  function addPoke(newPoke) {
    setPokemons([...pokemons, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPoke={addPoke} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={pokemonsFiltered} />
    </Container>
  );
}

export default PokemonPage;
