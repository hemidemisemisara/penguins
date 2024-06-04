import "./App.scss";
import Button from "./components/Button/Button";
import Heading from "./components/Heading/Heading";
import SubHeading from "./components/SubHeading/SubHeading";
import PhotoCardLarge from "./components/PhotoCardLarge/PhotoCardLarge";
import PhotoCardSmall from "./components/PhotoCardSmall/PhotoCardSmall";
import memory from "./assets/images/memories-1.png";
import firstImpression from "./assets/images/first-impressions-1.png";

function App() {
  return (
    <>
      <Button label={"label"} />
      <Heading heading={"shared memories"} />
      <SubHeading text={"friends since Apr 2023"} />
      <SubHeading text={"from Sara"} />
      <PhotoCardLarge
        source={memory}
        alt={"image alt text"}
        date={"May 13 2024"}
        title={"Amanda wearing Sara's sticker T-shirt"}
      />
      <PhotoCardSmall
        source={firstImpression}
        alt={"image alt text"}
        title={"Back to the future"}
      />
      <h1>Penguins</h1>
      <h2>Penguins</h2>
      <h3>Penguins</h3>
      <p>Penguins</p>
    </>
  );
}
export default App;
