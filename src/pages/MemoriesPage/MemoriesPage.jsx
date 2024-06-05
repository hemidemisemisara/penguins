import "./MemoriesPage.scss";
import Heading from "../../components/Heading/Heading";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import PhotoCardLarge from "../../components/PhotoCardLarge/PhotoCardLarge";

export default function MemoriesPage() {
  return (
    <>
      <div className="memories-page">
        <header className="memories-page__header">
          <ButtonBack />
          <Heading heading="shared memories" />
        </header>
        <div>
          <PhotoCardLarge />
        </div>
      </div>
    </>
  );
}
