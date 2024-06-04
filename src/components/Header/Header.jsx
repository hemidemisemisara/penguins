import "./Header.scss";
import Headshots from "../HeadShots/Headshots";
import SubHeading from "../SubHeading/SubHeading";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__heading">Sara & Amanda</h1>
      </div>
      <div className="header__bottom">
        <Headshots />
        <SubHeading text={"friends since Apr 2024"} />
      </div>
    </header>
  );
}
