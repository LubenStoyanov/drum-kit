import { useState } from "react";
import data from "./data.jsx";
import Button from "./Button.jsx";
import SoundsKat from "./SoundsKat.jsx";
import Searchbar from "./Searchbar.jsx";
import Composers from "./Composers.jsx";
import "./App.css";
import "./Button.css";
import "./SoundsKat.css";

export default function App() {
  const [filterSound, setFilterSound] = useState([]);
  const buttons = ["All", ...new Set(data.map((item) => item.category))];

  const filter = (button, inputValue = "") => {
    // if (inputValue) return filterInput(inputValue);
    // if (button === "All") return setFilterSound(data);
    // filterButton(button);
    return inputValue
      ? filterInput(inputValue)
      : button === "All"
      ? setFilterSound(data)
      : filterButton(button);
  };

  const filterButton = (button) => {
    const newFilteredSounds = data.filter((sound) => sound.category === button);
    console.log(newFilteredSounds);
    setFilterSound(newFilteredSounds);
  };
  const filterInput = (inputValue) => {
    const newFilteredSounds = data.filter((sound) =>
      sound.filename.startsWith(inputValue)
    );
    console.log(newFilteredSounds);
    setFilterSound(newFilteredSounds);
  };

  return (
    <div className="App">
      <h1>Play your sound</h1>
      <div className="flex-container">
        <Button button={buttons} filter={filter} />
      </div>
      <div className="flex-container">
        <Searchbar onFilterSoundChange={filter} />
      </div>
      <div className="flex-container">
        <div className="flex-container-80">
          <SoundsKat filterSound={filterSound} />
          {/* <Sounds /> */}
        </div>
        <div className="flex-container-20">
          <Composers />
        </div>
      </div>
    </div>
  );
}
