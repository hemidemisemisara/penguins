import "./App.scss";
import Button from "./components/Button/Button";
import Heading from "./components/Heading/Heading";
import SubHeading from "./components/SubHeading/SubHeading";

function App() {
  return (
    <>
      <Button label={"label"} />
      <Heading heading={"shared memories"} />
      <SubHeading text={"friends since Apr 2023"} />
      <SubHeading text={"from Sara"} />
      <h1>Penguins</h1>
      <h2>Penguins</h2>
      <h3>Penguins</h3>
      <p>Penguins</p>
    </>
  );
}
export default App;
