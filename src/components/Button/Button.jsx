import "./Button.scss";

export default function Button({ label, addClass }) {
  return <button className={`button ${addClass}`}>{label}</button>;
}
