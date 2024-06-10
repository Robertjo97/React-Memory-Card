const Card = ({ name, sprite }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={sprite} alt={name}></img>
    </div>
  );
};

export default Card;
