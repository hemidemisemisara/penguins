import "./SectionHowWhere.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import PhotoCardSmall from "../PhotoCardSmall/PhotoCardSmall";
import firstImpressions from "../../assets/images/first-impressions-1.png";

export default function SectionHowWhere() {
  return (
    <section className="how-where">
      <Heading heading="how & where we met" />
      <PhotoCardSmall
        source={firstImpressions}
        alt="first impression image"
        title="back to the future"
      />
      <p className="how-where__text">
        We met at Emily Carr University of Art + Design in Vancouver, when we
        studied UX Design. We soon became friends, after spending time working
        together in teams and the after school chats while walking to the train
        station!
      </p>
      <Button label="edit" />
    </section>
  );
}
