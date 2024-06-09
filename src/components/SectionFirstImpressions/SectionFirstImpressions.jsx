import "./SectionFirstImpressions.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import PhotoCardSmall from "../PhotoCardSmall/PhotoCardSmall";
import SubHeading from "../SubHeading/SubHeading";
import { useNavigate } from "react-router-dom";

export default function SectionFirstImpressions({ friendshipDetails }) {
  const firstImpressions = friendshipDetails["first-impressions"];
  const navigate = useNavigate();
  const clickEdit = () => {
    navigate("/first-impression-edit");
  };

  return (
    <section className="first-impressions">
      <Heading heading="first impressions" />
      {firstImpressions.map((impression) => {
        const createdBy = friendshipDetails.users.find(
          (user) => user.id === impression["created-by"]
        );
        return (
          <div key={impression.id} className="first-impressions__user">
            <SubHeading text={`from ${createdBy["first-name"]}`} />
            <PhotoCardSmall
              source={impression.image}
              alt={impression["image-title"]}
              title={impression["image-title"]}
            />
            <p className="first-impressions__text">{impression.description}</p>
          </div>
        );
      })}
      <Button label="edit" onClick={clickEdit} />
    </section>
  );
}
