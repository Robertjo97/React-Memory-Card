const Grid = ({pokemons}) => {
  return (
    <div className="grid">
        {pokemons.map((pokemon) => {
            return (
                <p>{pokemon.name}</p> //change this to cards
            )
        })}
    </div>
  );
};

export default Grid;

  