import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendshipPage from "./pages/FriendshipPage/FriendshipPage";
import MemoriesPage from "./pages/MemoriesPage/MemoriesPage";
import LetterPage from "./pages/LetterPage/LetterPage";

function App() {
  const friendshipId = "27d0e85e-f594-4f6e-9bd9-c9bd894f53c9";
  const [friendshipDetails, setFriendshipDetails] = useState(null);
  useEffect(() => {
    async function getFriendshipDetails() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/friendships/${friendshipId}`
        );
        setFriendshipDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("failed to fetch friendship details", error);
      }
    }
    getFriendshipDetails();
  }, []);

  if (friendshipDetails) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<FriendshipPage friendshipDetails={friendshipDetails} />}
            />
            <Route
              path="/memories/"
              element={<MemoriesPage friendshipDetails={friendshipDetails} />}
            />
            <Route
              path="/letter/:id"
              element={<LetterPage friendshipDetails={friendshipDetails} />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
