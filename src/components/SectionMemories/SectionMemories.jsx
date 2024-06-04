import "./SectionMemories.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import memory from "../../assets/images/memories-1.png";

export default function SectionMemories() {
  return (
    <section className="memories-section">
      <Heading heading="shared memories" />
      <div className="memories">
        <article className="memory">
          <img src={memory} alt="" />
        </article>
        <article className="memory">
          <img src={memory} alt="" />
        </article>
        <article className="memory">
          <img src={memory} alt="" />
        </article>
        <article className="memory">
          <img src={memory} alt="" />
        </article>
      </div>
      <Button label="add a momery" />
    </section>
  );
}
