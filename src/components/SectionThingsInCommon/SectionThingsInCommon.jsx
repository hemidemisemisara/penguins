import "./SectionThingsInCommon.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import ListItem from "../ListItem/ListItem";

export default function SectionThingsInCommon({ friendshipDetails }) {
  const thingsInCommon = friendshipDetails["things-in-common"];
  return (
    <section className="things-in-commmon-section">
      <Heading heading="things in common" />
      <ul className="things">
        {thingsInCommon.map((thing) => (
          <ListItem key={thing.id} text={thing.description} />
        ))}
      </ul>
      <Button label="edit" />
    </section>
  );
}
