import "./App.scss";
import Header from "./components/Header/Header";
import SectionLetters from "./components/SectionLetters/SectionLetters";
import SectionMemories from "./components/SectionMemories/SectionMemories";
import SectionThingsInCommon from "./components/SectionThingsInCommon/SectionThingsInCommon";
import SectionFirstImpressions from "./components/SectionFirstImpressions/SectionFirstImpressions";
import SectionHowWhere from "./components/SectionHowWhere/SectionHowWhere";

function App() {
  return (
    <>
      <Header />
      <SectionLetters />
      <SectionMemories />
      <SectionThingsInCommon />
      <SectionFirstImpressions />
      <SectionHowWhere />
    </>
  );
}
export default App;
