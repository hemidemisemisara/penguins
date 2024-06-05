import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendshipPage from "./pages/FriendshipPage/FriendshipPage";
import MemoriesPage from "./pages/MemoriesPage/MemoriesPage";
import LetterPage from "./pages/LetterPage/LetterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FriendshipPage />} />
          <Route path="/memories/:id" element={<MemoriesPage />} />
          <Route path="/letter/:id" element={<LetterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
