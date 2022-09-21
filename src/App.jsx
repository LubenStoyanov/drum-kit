import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";
import "./App.css";
import Composers from "./Composers.jsx";

export default function App() {
  const drum = [
    { name: "sound-1", file: "./sounds/drum-sound-1" },
    { name: "sound-2", file: "./sound/drum-sound-2" },
  ];
  const piano = [
    { name: "sound-1", file: "./sounds/drum-sound-1" },
    { name: "sound-2", file: "./sound/drum-sound-2" },
  ];
  const violin = [
    { name: "sound-1", file: "./sounds/drum-sound-1" },
    { name: "sound-2", file: "./sound/drum-sound-2" },
  ];
  const sounds = [drum, piano, violin];

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
