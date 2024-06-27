import Card from "./Card";

const Grid = ({ pokemons, handleClick }) => {
  return (
    <div className="grid">
      {pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            sprite={pokemon.sprite}
            handleClick={() => {handleClick(pokemon.name)}}
          ></Card>
        );
      })}
    </div>
  );
};

export default Grid;
