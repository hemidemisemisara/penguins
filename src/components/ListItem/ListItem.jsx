import "./ListItem.scss";

export default function ListItem({ text }) {
  return (
    <li className="list-item">
      <div className="list-item__bullet"></div>
      <p>{text}</p>
    </li>
  );
}
