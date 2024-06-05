import "./SectionFirstImpressions.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import PhotoCardSmall from "../PhotoCardSmall/PhotoCardSmall";
import SubHeading from "../SubHeading/SubHeading";

export default function SectionFirstImpressions({ friendshipDetails }) {
  const firstImpressions = friendshipDetails["first-impressions"];
  console.log("firstImpressions", firstImpressions);
  firstImpressions.map((impression) => console.log(impression));
  return (
    <section className="first-impressions">
      <Heading heading="first impressions" />
      {firstImpressions.map((impression) => {
        return (
          <div key={impression.id} className="first-impressions__user">
            <SubHeading text={`from ${impression["created-by"]}`} />
            <PhotoCardSmall
              source={impression.image}
              alt={impression["image-title"]}
              title={impression["image-title"]}
            />
            <p className="first-impressions__text">{impression.description}</p>
          </div>
        );
      })}
      <Button label="edit" />
    </section>
  );
}
