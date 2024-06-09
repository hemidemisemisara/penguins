import Headshot from "../Headshot/Headshot";
import "./Headshots.scss";

export default function Headshots({ friendshipDetails }) {
  return (
    <div className="headshots">
      <Headshot
        source={friendshipDetails.users[0]["profile"]}
        alt={friendshipDetails.users[0]["first-name"]}
      />
      <Headshot
        source={friendshipDetails.users[1]["profile"]}
        alt={friendshipDetails.users[1]["first-name"]}
        className={"headshot--right"}
      />
    </div>
  );
}
