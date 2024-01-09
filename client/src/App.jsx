import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Footer from "./components/Footer";
Footer;
Search;
function App() {
  return (
    <div className="app">
      <NavBar />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
