import "./PhotoCardLarge.scss";

export default function PhotoCardLarge({ source, alt, date, title }) {
  return (
    <div className="photocard-large">
      <img className="photocard-large__img" src={source} alt={alt} />
      <p className="photocard-large__date">{date}</p>
      <h3 className="photocard-large__title">{title}</h3>
    </div>
  );
}
