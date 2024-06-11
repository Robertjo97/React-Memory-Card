const Card = ({ name, sprite, handleClick}) => {
  return (
    <div className="card" onClick={handleClick}>
      <h3>{name}</h3>
      <img src={sprite} alt={name}></img>
    </div>
  );
};

export default Card;
