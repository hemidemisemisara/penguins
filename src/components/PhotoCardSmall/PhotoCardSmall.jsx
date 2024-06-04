import PropTypes from "prop-types";
import "./PhotoCardSmall.scss";

export default function PhotoCardSmall({ source, alt, title }) {
  return (
    <div className="photocard-small">
      <img className="photocard-small__img" src={source} alt={alt} />
      <h3 className="photocard-small__title">{title}</h3>
    </div>
  );
}

PhotoCardSmall.propTypes = {
  source: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
