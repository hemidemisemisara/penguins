import "./SectionHowWhere.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import PhotoCardSmall from "../PhotoCardSmall/PhotoCardSmall";

export default function SectionHowWhere({ friendshipDetails }) {
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
      <Button label="edit" />
    </section>
  );
}
