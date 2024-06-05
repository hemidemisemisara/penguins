import "./LetterPage.scss";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Button from "../../components/Button/Button";
import user from "../../assets/images/user-1.png";
import { useParams } from "react-router-dom";

export default function LetterPage({ friendshipDetails }) {
  const params = useParams();
  const letterId = params.id;
  const letters = friendshipDetails.letters;
  //TODO: Make the type the same
  const letter = letters.find((letter) => letter.id == letterId);

  return (
    <div className="letter-page">
      <header className="letter-page__header">
        <ButtonBack />
      </header>
      <div className="letter-page__letter">
        <h2 className="letter-page__subject">{letter.subject}</h2>
        <div className="letter-page__send-info">
          {/* TODO: load sender photo */}
          <img className="letter-page__photo" src={user} alt="sara" />
          <div className="letter-page__info-text">
            <div className="letter-page__sender-send-date">
              {/* TODO: update created-by*/}
              <p className="letter-page__sender">{letter["created-by"]}</p>
              <p className="letter-page__send-date">{letter.timestamp}</p>
            </div>
            {/* TODO: update send to*/}
            <p className="letter-page__send-to">to Amanda</p>
          </div>
        </div>
        {/* TODO: display changing lines */}
        <p className="letter-page__content">
          {
            <div>
              {letter.content.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          }
        </p>
      </div>
      <Button label="reply" />
    </div>
  );
}
