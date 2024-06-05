import "./LetterPage.scss";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Button from "../../components/Button/Button";
import user from "../../assets/images/user-1.png";

export default function LetterPage() {
  return (
    <div className="letter-page">
      <header className="letter-page__header">
        <ButtonBack />
      </header>
      <div className="letter-page__letter">
        <h2 className="letter-page__subject">How is it going in Brasilia?</h2>
        <div className="letter-page__send-info">
          <img className="letter-page__photo" src={user} alt="sara" />
          <div className="letter-page__info-text">
            <div className="letter-page__sender-send-date">
              <p className="letter-page__sender">Sara</p>
              <p className="letter-page__send-date">May 15</p>
            </div>
            <p className="letter-page__send-to">to Amanda</p>
          </div>
        </div>
        <p className="letter-page__content">
          Hey girl, How is it going? Are you happy to be back? How is staying
          with your in-laws? Hope you’re doing well back in Brasilia. I look
          forward to see more photos from you! I’ve been thinking about my
          capstone project for the bootcamp, maybe I’ll do something like this
          to create friendship memories. Let me know what you think about this.
          Miss you xx Sara
        </p>
      </div>
      <Button label="reply" />
    </div>
  );
}
