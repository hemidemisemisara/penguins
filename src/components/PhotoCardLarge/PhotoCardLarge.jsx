import "./PhotoCardLarge.scss";

export default function PhotoCardLarge({ source, alt, date, title, id }) {
  return (
    <div className="photocard-large" id={id}>
      <img className="photocard-large__img" src={source} alt={alt} />
      <p className="photocard-large__date">{date}</p>
      <h3 className="photocard-large__title">{title}</h3>
    </div>
  );
}
