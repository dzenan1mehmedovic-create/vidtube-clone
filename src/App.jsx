import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import ShortsPage from "./Pages/Shorts/ShortsPage";
import SearchResults from "./Pages/SearchResults/SearchResults";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar
        setSidebar={setSidebar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar
                sidebar={sidebar}
                category={category}
                setCategory={setCategory}
              />
              <Home
                sidebar={sidebar}
                category={category}
                searchQuery={searchQuery}
              />
            </>
          }
        />

        <Route
          path="/search"
          element={
            <>
              <Sidebar
                sidebar={sidebar}
                category={category}
                setCategory={setCategory}
              />
              <SearchResults sidebar={sidebar} setSearchQuery={setSearchQuery} />
            </>
          }
        />

        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/shorts" element={<ShortsPage />} />
      </Routes>
    </div>
  );
};

export default App;