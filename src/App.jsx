import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;