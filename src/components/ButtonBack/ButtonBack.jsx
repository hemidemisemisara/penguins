import "./ButtonBack.scss";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";

export default function ButtonBack() {
  return (
    <Link to="/" className="button-back">
      <img src={arrowLeft} alt="arrow left" className="button-back__icon" />
    </Link>
  );
}
