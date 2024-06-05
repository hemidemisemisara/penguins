import "./SubHeading.scss";

export default function SubHeading({ text }) {
  return (
    <div className="sub-heading">
      <div className="sub-heading__line"></div>
      <p className="sub-heading__text">{text}</p>
      <div className="sub-heading__line"></div>
    </div>
  );
}
