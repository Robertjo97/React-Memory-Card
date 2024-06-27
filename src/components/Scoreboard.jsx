function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <h1>Pokemon Memory Card</h1>
      <h3>Score: {score}</h3>
      <h3>High Score: {highScore}</h3>
    </div>
  );
}

export default Scoreboard;
