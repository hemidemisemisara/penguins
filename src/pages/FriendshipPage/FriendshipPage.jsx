import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import SectionLetters from "../../components/SectionLetters/SectionLetters";
import SectionMemories from "../../components/SectionMemories/SectionMemories";
import SectionThingsInCommon from "../../components/SectionThingsInCommon/SectionThingsInCommon";
import SectionFirstImpressions from "../../components/SectionFirstImpressions/SectionFirstImpressions";
import SectionHowWhere from "../../components/SectionHowWhere/SectionHowWhere";

export default function FriendshipPage() {
  const [friendshipDetails, setFriendshipDetails] = useState(null);
  useEffect(() => {
    async function getFriendshipDetails() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/friendships/1`
        );
        console.log(response.data);
        setFriendshipDetails(response.data);
      } catch (error) {
        console.error("failed to fetch friendship details", error);
      }
    }
    getFriendshipDetails();
  }, []);

  if (friendshipDetails) {
    return (
      <>
        <Header friendshipDetails={friendshipDetails} />
        <SectionLetters friendshipDetails={friendshipDetails} />
        <SectionMemories friendshipDetails={friendshipDetails} />
        <SectionThingsInCommon friendshipDetails={friendshipDetails} />
        <SectionFirstImpressions friendshipDetails={friendshipDetails} />
        <SectionHowWhere friendshipDetails={friendshipDetails} />
      </>
    );
  }
}
