import PropTypes from "prop-types";
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

PhotoCardLarge.propTypes = {
  source: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
