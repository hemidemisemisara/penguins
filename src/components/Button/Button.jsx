import PropTypes from "prop-types";
import "./Button.scss";

export default function Button({ label }) {
  return <button className="button">{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
