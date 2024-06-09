import "./SectionHowWhere.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import PhotoCardSmall from "../PhotoCardSmall/PhotoCardSmall";
import { useNavigate } from "react-router-dom";

export default function SectionHowWhere({ friendshipDetails }) {
  const navigate = useNavigate();
  const clickEdit = () => {
    navigate("/how-where-edit");
  };
  return (
    <section className="how-where">
      <Heading heading="how & where we met" />
      <PhotoCardSmall
        source={friendshipDetails["how-where"].image}
        alt={friendshipDetails["how-where"]["image-title"]}
        title={friendshipDetails["how-where"]["image-title"]}
      />
      <p className="how-where__text">
        {friendshipDetails["how-where"].description}
      </p>
      <Button label="edit" onClick={clickEdit} />
    </section>
  );
}
