import "./SectionFirstImpressions.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import PhotoCardSmall from "../PhotoCardSmall/PhotoCardSmall";
import SubHeading from "../SubHeading/SubHeading";

export default function SectionFirstImpressions({ friendshipDetails }) {
  const firstImpressions = friendshipDetails["first-impressions"];
  console.log("firstImpressions", firstImpressions);
  return (
    <section className="first-impressions">
      <Heading heading="first impressions" />
      {firstImpressions.map((firstImpression) => {
        <>
          <h1>hello</h1>
          <div className="first-impressions__user">
            <SubHeading text={firstImpression["created-by"]} />
            <PhotoCardSmall
              source={firstImpression.image}
              alt="first impression image"
              title={firstImpression.image}
            />
            <p className="first-impressions__text">
              {firstImpression.description}
            </p>
            <Button label="edit" />
          </div>
          ;
        </>;
      })}
    </section>
  );
}
