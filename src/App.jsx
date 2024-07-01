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
      let offset = Math.floor(Math.random() * 1013);
      let url = "https://pokeapi.co/api/v2/pokemon/?limit=12&offset=" + offset;
      try {
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results;

        const pokePromises = results.map(async (pokemon) => {
          try {
            const name = pokemon.name;
            const response = await fetch(pokemon.url);
            const data = await response.json();
            const sprite = data.sprites.front_default;

            const firstLetter = name.charAt(0);
            const fixedFirstLetter = firstLetter.toUpperCase();
            const theRest = name.slice(1);
            const fixedName = fixedFirstLetter + theRest;

            return {
              name: fixedName,
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
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setMemory([]);
    } else {
      setMemory([...memory, name]);
      setScore((score) => {
        return score + 1;
      });
    }
    shuffle();
  };

  const shuffle = () => {
    for (let i = pokemonList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pokemonList[i], pokemonList[j]] = [pokemonList[j], pokemonList[i]];
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
