import "./Button.scss";

export default function Button({ label, addClass, onClick }) {
  return (
    <button className={`button ${addClass}`} onClick={onClick}>
      {label}
    </button>
  );
}
