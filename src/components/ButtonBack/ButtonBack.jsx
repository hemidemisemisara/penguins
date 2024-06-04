import "./ButtonBack.scss";
import arrowLeft from "../../assets/icons/arrow-left.svg";

export default function ButtonBack() {
  return (
    <button className="button-back">
      <img src={arrowLeft} alt="arrow left" className="button-back__icon" />
    </button>
  );
}
