import "./SectionThingsInCommon.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import ListItem from "../ListItem/ListItem";
import { useNavigate } from "react-router-dom";

export default function SectionThingsInCommon({ friendshipDetails }) {
  const navigate = useNavigate();
  const clickEdit = () => {
    navigate("/things-in-common-edit");
  };
  const thingsInCommon = friendshipDetails["things-in-common"];
  return (
    <section className="things-in-commmon-section">
      <Heading heading="things in common" />
      <ul className="things">
        {thingsInCommon
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((thing) => (
            <ListItem key={thing.id} text={thing.description} />
          ))}
      </ul>
      <Button label="edit" onClick={clickEdit} />
    </section>
  );
}
