import "./LetterList.scss";
import Letter from "../Letter/Letter";
export default function LetterList() {
  return (
    <div className="letter-list">
      <Letter
        status="unread"
        date="20240515"
        subject="How is it going in Brasilia"
      />
      <Letter
        status="read"
        date="20240515"
        subject="How is it going in Brasilia"
      />
    </div>
  );
}
