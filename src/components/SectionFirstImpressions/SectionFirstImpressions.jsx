import "./SectionFirstImpressions.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import PhotoCardSmall from "../PhotoCardSmall/PhotoCardSmall";
import SubHeading from "../SubHeading/SubHeading";
import firstImpressions from "../../assets/images/first-impressions-1.png";

export default function SectionFirstImpressions() {
  return (
    <section className="first-impressions">
      <Heading heading="first impressions" />
      <div className="first-impressions__user">
        <SubHeading text="from Sara" />
        <PhotoCardSmall
          source={firstImpressions}
          alt="first impression image"
          title="back to the future"
        />
        <p className="first-impressions__text">
          In the introduction over zoom at Emily Carr, you talked about one of
          your favorite movies being Back to the Future, at that time, I already
          thought I would like to be your friend!
        </p>
      </div>
      <div className="first-impressions__user">
        <SubHeading text="from Sara" />
        <PhotoCardSmall
          source={firstImpressions}
          alt="first impression image"
          title="back to the future"
        />
        <p className="first-impressions__text">
          In the introduction over zoom at Emily Carr, you talked about one of
          your favorite movies being Back to the Future, at that time, I already
          thought I would like to be your friend!
        </p>
        <Button label="edit" />
      </div>
    </section>
  );
}
