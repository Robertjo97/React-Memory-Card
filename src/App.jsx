import { useEffect, useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Grid from "./components/Grid";

//https://pokeapi.co/api/v2/pokemon/?limit=20

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [memory, setMemory] = useState([]);

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

  const click = (name) => {
    if (memory.includes(name)) {
      setScore(0);
      setMemory([]);
    } else {
      setMemory([...memory, name]);
      setScore((score) => {
        return score + 1;
      });
    }
  };

  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <Grid pokemons={pokemonList} handleClick={click} />
    </>
  );
};

export default App;
