import Headshot from "../Headshot/Headshot";
import "./Headshots.scss";
import userOne from "../../assets/images/user-1.png";

export default function Headshots() {
  return (
    <div className="headshots">
      <Headshot source={userOne} alt={"sara"} />
      <Headshot source={userOne} alt={"sara"} className={"headshot--right"} />
    </div>
  );
}
