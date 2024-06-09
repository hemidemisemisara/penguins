import "./LetterList.scss";
import Letter from "../Letter/Letter";
import { Link } from "react-router-dom";

export default function LetterList({ friendshipDetails }) {
  const letters = friendshipDetails.letters;
  return (
    <div className="letter-list">
      {letters.map((letter) => {
        return (
          <Link to={`/letter/${letter.id}`} key={letter.id}>
            <Letter
              isRead={letter.isRead}
              date={letter.timestamp}
              subject={letter.subject}
            />
          </Link>
        );
      })}
    </div>
  );
}
