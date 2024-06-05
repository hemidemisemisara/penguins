import "./Headshot.scss";

export default function Headshot({ source, alt, className }) {
  return (
    <div className={`headshot ${className}`}>
      <img className="headshot__img" src={source} alt={alt} />
    </div>
  );
}
