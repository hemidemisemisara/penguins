import "./PhotoCardSmall.scss";

export default function PhotoCardSmall({ source, alt, title }) {
  return (
    <div className="photocard-small">
      <img className="photocard-small__img" src={source} alt={alt} />
      <h3 className="photocard-small__title">{title}</h3>
    </div>
  );
}
