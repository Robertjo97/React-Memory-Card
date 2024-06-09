import { useEffect, useState } from "react";
import Scoreboard from "./components/Scoreboard";

//https://pokeapi.co/api/v2/pokemon/?limit=20

const App = () => {
  const [score, setScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=12"
        );
        const data = await response.json();
        const results = data.results;

        const pokePromises = results.map(async (pokemon) => {
          try {
            const name = pokemon.name;
            const response = await fetch(pokemon.url);
            const data = await response.json();
            const sprite = data.sprites.front_default;

            return {
              name: name,
              sprite: sprite,
            };
          } catch (error) {
            console.error(error);
          }
        });
        const pokemon = await Promise.all(pokePromises);
        setPokemonList(pokemon);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemon();
  }, []);
  console.log(pokemonList);
  return <Scoreboard score={score} />;
};

export default App;
