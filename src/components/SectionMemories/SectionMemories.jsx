import "./SectionMemories.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function SectionMemories({ friendshipDetails }) {
  const navigate = useNavigate();
  const handlePhotoClick = (id) => {
    navigate(`/memories#${id}`);
  };

  const memories = friendshipDetails.memories;
  return (
    <section className="memories-section">
      <Heading heading="shared memories" />
      <div className="memories">
        {memories.map((memory) => (
          <article
            key={memory.id}
            className="memory"
            onClick={() => handlePhotoClick(memory.id)}
          >
            <img src={memory.image} alt={memory.title} />
          </article>
        ))}
      </div>
      <Button label="add a momery" />
    </section>
  );
}
