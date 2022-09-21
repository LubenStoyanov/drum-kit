import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";
import "./App.css";
import Composers from "./Composers.jsx";

export default function App() {
  const [filterSound, setFilterSound] = useState("");

  return (
    <div className="App">
      <Searchbar
        filterSound={filterSound}
        onFilterSoundChange={setFilterSound}
      />
      <div>
        <Composers />
      </div>
    </div>
  );
}
