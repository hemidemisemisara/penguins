import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendshipPage from "./pages/FriendshipPage/FriendshipPage";
import MemoriesPage from "./pages/MemoriesPage/MemoriesPage";
import LetterPage from "./pages/LetterPage/LetterPage";
import HowWhereEditPage from "./pages/HowWhereEditPage/HowWhereEditPage";

function App() {
  // TODO: to be updated to useState when authentication is in place
  const currentUserId = "35e01b22-87fa-4ed5-a681-a92736878549";
  const friendshipId = "27d0e85e-f594-4f6e-9bd9-c9bd894f53c9";
  const [friendshipDetails, setFriendshipDetails] = useState(null);
  const [detailEdited, setDetailEdited] = useState(false);

  useEffect(() => {
    async function getFriendshipDetails() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/friendships/${friendshipId}`
        );
        setFriendshipDetails(response.data);
      } catch (error) {
        console.error("failed to fetch friendship details", error);
      }
    }
    getFriendshipDetails();
    setDetailEdited(false);
  }, [detailEdited]);

  if (friendshipDetails) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <FriendshipPage
                  friendshipDetails={friendshipDetails}
                  currentUserId={currentUserId}
                />
              }
            />
            <Route
              path="/memories/"
              element={
                <MemoriesPage
                  friendshipDetails={friendshipDetails}
                  currentUserId={currentUserId}
                />
              }
            />
            <Route
              path="/letter/:id"
              element={
                <LetterPage
                  friendshipDetails={friendshipDetails}
                  currentUserId={currentUserId}
                />
              }
            />
            <Route
              path="/how-where-edit"
              element={
                <HowWhereEditPage
                  friendshipDetails={friendshipDetails}
                  setDetailEdited={setDetailEdited}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
