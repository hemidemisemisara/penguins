import "./MemoriesPage.scss";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import PhotoCardLarge from "../../components/PhotoCardLarge/PhotoCardLarge";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function MemoriesPage({ friendshipDetails }) {
  // get the url details
  const location = useLocation();

  // when location changes
  useEffect(() => {
    // if the location as a #id in there
    if (location.hash) {
      // find the element with the #id
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // go to that element and view it
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className="memories-page">
        <header className="memories-page__header">
          <ButtonBack />
          <h1 className="memories-page__heading">Shared Memories</h1>
        </header>
        <div className="memories-page__memories">
          {friendshipDetails.memories.map((memory) => {
            return (
              <PhotoCardLarge
                key={memory.id}
                id={memory.id}
                source={memory.image}
                alt={memory.title}
                date={memory.date}
                title={memory.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
