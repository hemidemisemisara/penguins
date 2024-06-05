import Headshot from "../Headshot/Headshot";
import "./Headshots.scss";

export default function Headshots({ friendshipDetails }) {
  console.log("Headshots", friendshipDetails["user-1-profile"]);
  return (
    <div className="headshots">
      <Headshot
        source={friendshipDetails["user-1-profile"]}
        alt={friendshipDetails["user-1-first-name"]}
      />
      <Headshot
        source={friendshipDetails["user-2-profile"]}
        alt={friendshipDetails["user-2-first-name"]}
        className={"headshot--right"}
      />
    </div>
  );
}
