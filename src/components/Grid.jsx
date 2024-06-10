import Card from "./Card";

const Grid = ({ pokemons }) => {
  return (
    <div className="grid">
      {pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            sprite={pokemon.sprite}
          ></Card>
        );
      })}
    </div>
  );
};

export default Grid;
