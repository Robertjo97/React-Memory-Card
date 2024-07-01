function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <ul>
        <li><h1>Pokémon Memory Card</h1></li>
        <li><h3>Score: {score}</h3></li>
        <li><h3>High Score: {highScore}</h3></li>
      </ul>
    </div>
  );
}

export default Scoreboard;
