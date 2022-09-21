import { useState } from "react";
// import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";
import "./App.css";
import Composers from "./Composers.jsx";
import Sounds from "./Sounds.jsx";

export default function App() {
  // const drum = [
  //   { name: "kick", file: "./sounds/drum-sound-1" },
  //   { name: "snare", file: "./sound/drum-sound-2" },
  // ];
  // const piano = [
  //   { name: "sound1", file: "./sounds/drum-sound-1" },
  //   { name: "sound2", file: "./sound/drum-sound-2" },
  // ];
  // const violin = [
  //   { name: "sound1", file: "./sounds/drum-sound-1" },
  //   { name: "sound2", file: "./sound/drum-sound-2" },
  // ];
  const sounds = [
    {
      category: "piano",
      id: "0",
      name: "piano bflat",
      file: "./sounds/drum-sound-1",
    },
    {
      category: "piano",
      id: "1",
      name: "piano f#",
      file: "./sound/drum-sound-2",
    },
    {
      category: "violin",
      id: "2",
      name: "violin f",
      file: "./sounds/drum-sound-3",
    },
    {
      category: "violin",
      id: "3",
      name: "violin c",
      file: "./sound/drum-sound-4",
    },
    { category: "drum", id: "5", name: "kick", file: "./sounds/kick" },
    { category: "drum", id: "6", name: "snare", file: "./sound/snare" },
  ];

  const [filterSound, setFilterSound] = useState("");

  const filteredSounds = sounds
    .filter((sound) => sound.name === filterSound)
    .map((sound) => <div key={sound.id}>{sound.file}</div>);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Searchbar
        filterSound={filterSound}
        onFilterSoundChange={setFilterSound}
      />
      {filteredSounds}
      <Sounds />
      <div>
        <Composers />
      </div>
    </div>
  );
}
