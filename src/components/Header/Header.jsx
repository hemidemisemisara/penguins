import "./Header.scss";
import Headshots from "../HeadShots/Headshots";
import SubHeading from "../SubHeading/SubHeading";

export default function Header({ friendshipDetails }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__heading">
          {`${friendshipDetails.users[0]["first-name"]} & ${friendshipDetails.users[1]["first-name"]} `}
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
