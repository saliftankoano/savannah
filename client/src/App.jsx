import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
Search;
function App() {
  return (
    <div className="app">
      <NavBar />
      <Search />
    </div>
  );
}

export default App;
