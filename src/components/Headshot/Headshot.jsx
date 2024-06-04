import PropTypes from "prop-types";
import "./Headshot.scss";

export default function Headshot({ source, alt, className }) {
  return (
    <div className={`headshot ${className}`}>
      <img className="headshot__img" src={source} alt={alt} />
    </div>
  );
}

Headshot.propTypes = {
  source: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
