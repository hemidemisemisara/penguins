import "./LetterList.scss";
import Letter from "../Letter/Letter";

export default function LetterList({ friendshipDetails }) {
  const letters = friendshipDetails.letters;
  console.log("letters", letters);
  return (
    <div className="letter-list">
      {letters.map((letter) => {
        return (
          <Letter
            key={letter.id}
            isRead={letter.isRead}
            date={letter.timestamp}
            subject={letter.subject}
          />
        );
      })}
    </div>
  );
}
