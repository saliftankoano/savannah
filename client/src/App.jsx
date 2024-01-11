import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBlock from "./components/SearchBlock";

function App() {
  return (
    <div className="app">
      <NavBar />
      <SearchBlock />
      <Footer />
    </div>
  );
}

export default App;
