import { useState } from "react";
import Searchbar from "./Searchbar.jsx";
import "./App.css";
import Composers from "./Composers.jsx";

export default function App() {
  const [filterSound, setFilterSound] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Searchbar
        filterSound={filterSound}
        onFilterSoundChange={setFilterSound}
      />
      <div>
        <Sounds />
        <Composers />
      </div>
    </div>
  );
}
