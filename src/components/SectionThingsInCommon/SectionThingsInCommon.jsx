import "./SectionThingsInCommon.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import ListItem from "../ListItem/ListItem";

export default function SectionMemories() {
  return (
    <section className="things-in-commmon-section">
      <Heading heading="things in common" />
      <ul className="things">
        <ListItem text="love bubble tea" />
        <ListItem text="love beautiful stuff" />
        <ListItem text="love bubble tea" />
        <ListItem text="love bubble tea" />
        <ListItem text="love bubble tea" />
        <ListItem text="love bubble tea" />
      </ul>
      <Button label="edit" />
    </section>
  );
}
