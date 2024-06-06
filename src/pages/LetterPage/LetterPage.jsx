import "./LetterPage.scss";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";

export default function LetterPage({ friendshipDetails }) {
  const params = useParams();
  const letterId = params.id;
  const letters = friendshipDetails.letters;
  const letter = letters.find((letter) => letter.id === letterId);
  const senderId = letter["created-by"];
  const sender = friendshipDetails.users.find((user) => user.id == senderId);
  const receiver = friendshipDetails.users.find((user) => user.id !== senderId);
  // formatting the date to May 15 2024
  const sendDate = new Date(letter.timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = sendDate.toLocaleDateString("en-US", options);

  return (
    <div className="letter-page">
      <header className="letter-page__header">
        <ButtonBack />
      </header>
      <div className="letter-page__letter">
        <h2 className="letter-page__subject">{letter.subject}</h2>
        <div className="letter-page__send-info">
          <img
            className="letter-page__photo"
            src={sender["profile"]}
            alt={sender["first-name"]}
          />
          <div className="letter-page__info-text">
            <div className="letter-page__sender-send-date">
              <p className="letter-page__sender">{sender["first-name"]}</p>
              <p className="letter-page__send-date">{formattedDate}</p>
            </div>
            <p className="letter-page__send-to">{`to ${receiver["first-name"]}`}</p>
          </div>
        </div>
        {
          <div className="letter-page__content">
            {letter.content.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        }
      </div>
      <Button label="reply" />
    </div>
  );
}
