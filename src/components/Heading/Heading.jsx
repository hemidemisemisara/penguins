import PropTypes from "prop-types";
import "./Heading.scss";

export default function Heading({ heading }) {
  return (
    <div className="heading">
      <div className="heading__spade"></div>
      <h2 className="heading__text">{heading}</h2>
      <div className="heading__spade"></div>
    </div>
  );
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};
