const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-button"
      >
        Visit Cafe
      </a>
    </div>
  );
};

export default Card;
