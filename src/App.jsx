import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";
import Composers from "./Composers.jsx";
import "./App.css";

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
