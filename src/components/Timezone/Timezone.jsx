import "./Timezone.scss";
import moment from "moment-timezone";
import { useEffect, useState } from "react";

export default function Timezone({ friendshipDetails, currentUserId }) {
  // find the other user (not the current user)
  const friend = friendshipDetails.users.find(
    (user) => user.id !== currentUserId
  );

  // display friend's time
  const [time, setTime] = useState(new Date());

  // updating friend's time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timezone">
      <p className="timezone__user">{`${friend["first-name"]}'s Local Time`}</p>
      <p className="timezone__date">
        {moment(time).tz(friend.timezone).format("ddd, MMM DD")}
      </p>
      <div className="timezone__main">
        <p className="timezone__time-display">
          {moment(time).tz(friend.timezone).format("h:mm")}
        </p>
        <p className="timezone__am-pm">
          {" "}
          {moment(time).tz(friend.timezone).format("a")}
        </p>
      </div>
      <p className="timezone__location">{friend.location}</p>
    </div>
  );
}
