import Header from "../../components/Header/Header";
import Timezone from "../../components/Timezone/Timezone";
import SectionLetters from "../../components/SectionLetters/SectionLetters";
import SectionMemories from "../../components/SectionMemories/SectionMemories";
import SectionThingsInCommon from "../../components/SectionThingsInCommon/SectionThingsInCommon";
import SectionFirstImpressions from "../../components/SectionFirstImpressions/SectionFirstImpressions";
import SectionHowWhere from "../../components/SectionHowWhere/SectionHowWhere";

export default function FriendshipPage({ friendshipDetails }) {
  return (
    <>
      <Header friendshipDetails={friendshipDetails} />
      <Timezone friendshipDetails={friendshipDetails} />
      <SectionLetters friendshipDetails={friendshipDetails} />
      <SectionMemories friendshipDetails={friendshipDetails} />
      <SectionThingsInCommon friendshipDetails={friendshipDetails} />
      <SectionFirstImpressions friendshipDetails={friendshipDetails} />
      <SectionHowWhere friendshipDetails={friendshipDetails} />
    </>
  );
}
