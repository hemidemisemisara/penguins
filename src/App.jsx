import "./App.scss";
import Button from "./components/Button/Button";
import Heading from "./components/Heading/Heading";
import SubHeading from "./components/SubHeading/SubHeading";
import PhotoCardLarge from "./components/PhotoCardLarge/PhotoCardLarge";
import PhotoCardSmall from "./components/PhotoCardSmall/PhotoCardSmall";
import Headshot from "./components/Headshot/Headshot";
import Headshots from "./components/HeadShots/Headshots";
import ListItem from "./components/ListItem/ListItem";
import Letter from "./components/Letter/Letter";
import memory from "./assets/images/memories-1.png";
import firstImpression from "./assets/images/first-impressions-1.png";
import userOne from "./assets/images/user-1.png";

function App() {
  return (
    <>
      <Letter
        status="unread"
        date="20240515"
        subject="How is it going in Brasilia"
      />
      <Letter
        status="read"
        date="20240515"
        subject="How is it going in Brasilia"
      />
      <ListItem text="love bubble tea" />
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
      <Headshot source={userOne} alt={"sara"} />
      <Headshots />
      <h1>Penguins</h1>
      <h2>Penguins</h2>
      <h3>Penguins</h3>
      <p>Penguins</p>
    </>
  );
}
export default App;
