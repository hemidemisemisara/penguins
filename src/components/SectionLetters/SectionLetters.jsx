import "./SectionLetters.scss";
import Heading from "../Heading/Heading";
import LetterList from "../LetterList/LetterList";
import Button from "../Button/Button";

export default function SectionLetters({ friendshipDetails }) {
  return (
    <section className="letter-section">
      <Heading heading="Letters" />
      <LetterList friendshipDetails={friendshipDetails} />
      <Button label="write a letter" />
    </section>
  );
}
