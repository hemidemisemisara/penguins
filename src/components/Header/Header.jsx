import "./Header.scss";
import Headshots from "../HeadShots/Headshots";
import SubHeading from "../SubHeading/SubHeading";

export default function Header({ friendshipDetails }) {
  console.log("headerpage", friendshipDetails["user-1-profile"]);
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__heading">
          {`${friendshipDetails["user-1-first-name"]} & ${friendshipDetails["user-2-first-name"]} `}
        </h1>
      </div>
      <div className="header__bottom">
        <Headshots friendshipDetails={friendshipDetails} />
        <SubHeading
          text={`friends since ${friendshipDetails["friends-since"]}`}
        />
      </div>
    </header>
  );
}
