import "./Timezone.scss";

export default function Timezone({ friendshipDetails }) {
  return (
    <div className="timezone">
      <p className="timezone__user">Amanda&apos;s Local Time</p>
      <div className="timezone__main">
        <p className="timezone__date">Thu, Jun 6</p>
        <p className="timezone__time-display">10:47</p>
        <p className="timezone__am-pm">am</p>
      </div>
      <p className="timezone__location">Brasilia, Brazil</p>
    </div>
  );
}
