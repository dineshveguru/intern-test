function Card({ image, desc }) {
  return (
    <div className="card--container">
      {image === "" ? (
        <img src={require(`../assets/default.png`)} className="card--image" />
      ) : (
        <img src={require(`../assets/${image}`)} className="card--image" />
      )}

      <p>{desc}</p>
    </div>
  );
}

export default Card;
