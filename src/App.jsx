import { useState } from "react";
import items from './data';
import Button from "./Button.jsx";
import SoundsKat from "./SoundsKat.jsx";
import Searchbar from "./Searchbar.jsx";
import Composers from "./Composers.jsx";
import "./App.css";
import './Button.css';
import './SoundsKat.css';


const categories = ['All', ...new Set(items.map(item => item.category))];
// console.log(categories);

export default function App() {
  const sounds = [];

  const [filterSound, setFilterSound] = useState("");

  // katrins filter
  const [menuItem, setMenuItem] = useState(items);
  const [button] = useState(categories);

  const filter = (button) =>{
	if(button === 'All') {
	  setMenuItem(items);
	  return;
	}
	const filteredData = items.filter (item => item.category === button);
	setMenuItem(filteredData)
  }
  
  // lubens filter
  const filteredSounds = sounds
	.filter((sound) => sound.name === filterSound)
	.map((sound) => <div key={sound.id}>{sound.file}</div>);

  return (
	<div className="App">
	  <h1>Play your sound</h1>
	  <div className="flex-container">
		<Button button={button} filter={filter} />
	  </div>
	  <div className="flex-container">
		<Searchbar
		  filterSound={filterSound}
		  onFilterSoundChange={setFilterSound}
		/>
		  {filteredSounds}
	  </div>
	  <div className="flex-container">
		<div className="flex-container-80">
		<SoundsKat menuItem={menuItem} />
	  {/* <Sounds /> */}
	  </div>
	  <div className="flex-container-20">
		<Composers />
	  </div>
	  </div>
	</div>
  );
}
