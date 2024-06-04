import PropTypes from "prop-types";
import "./Letter.scss";
import envelope from "../../assets/icons/envelope.svg";
import envelopeOpen from "../../assets/icons/envelope-open.svg";

export default function Letter({ date, subject, status }) {
  if (status === "unread") {
    return (
      <div className={`letter ${status}`}>
        <img className="letter__icon" src={envelope} alt="letter__icon" />
        <p className="letter__date">{date}</p>
        <p className="letter__subject">{subject}</p>
      </div>
    );
  } else
    return (
      <div className={`letter ${status}`}>
        <img className="letter__icon" src={envelopeOpen} alt="letter__icon" />
        <p className="letter__date">{date}</p>
        <p className="letter__subject">{subject}</p>
      </div>
    );
}

Letter.propTypes = {
  date: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
