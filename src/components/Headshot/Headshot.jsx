import PropTypes from "prop-types";
import "./Headshot.scss";

export default function Headshot({ source, alt }) {
  return (
    <div className="headshot">
      <img className="headshot__img" src={source} alt={alt} />
    </div>
  );
}

Headshot.propTypes = {
  source: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
};
