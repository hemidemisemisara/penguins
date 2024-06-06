import "./Letter.scss";
import envelope from "../../assets/icons/envelope.svg";
import envelopeOpen from "../../assets/icons/envelope-open.svg";

export default function Letter({ date, subject, isRead }) {
  // formatting the date to May 15 2024
  const sendDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = sendDate.toLocaleDateString("en-US", options);

  if (isRead === "false") {
    return (
      <div className={`letter ${isRead}`}>
        <img className="letter__icon" src={envelope} alt="letter__icon" />
        <p className="letter__date">{formattedDate}</p>
        <p className="letter__subject">{subject}</p>
      </div>
    );
  } else
    return (
      <div className={`letter ${isRead}`}>
        <img className="letter__icon" src={envelopeOpen} alt="letter__icon" />
        <p className="letter__date">{formattedDate}</p>
        <p className="letter__subject">{subject}</p>
      </div>
    );
}
