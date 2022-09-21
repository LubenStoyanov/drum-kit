import { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <div>
        <Sounds />
        <Composers />
      </div>
    </div>
  );
}
