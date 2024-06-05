import "./SectionMemories.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

export default function SectionMemories({ friendshipDetails }) {
  const memories = friendshipDetails.memories;
  return (
    <section className="memories-section">
      <Heading heading="shared memories" />
      <div className="memories">
        {memories.map((memory) => (
          <article key={memory.id} className="memory">
            <img src={memory.image} alt={memory.title} />
          </article>
        ))}
      </div>
      <Button label="add a momery" />
    </section>
  );
}
