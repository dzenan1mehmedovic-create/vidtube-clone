import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import ShortsPage from "./Pages/Shorts/ShortsPage";
import SearchResults from "./Pages/SearchResults/SearchResults";
import ProfilePage from "./Pages/Profile/ProfilePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ErrorBoundary>
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
                <SearchResults
                  sidebar={sidebar}
                  setSearchQuery={setSearchQuery}
                />
              </>
            }
          />

          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;