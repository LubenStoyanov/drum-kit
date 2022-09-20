import { useState } from "react";
import "./App.css";
import Composers from "./Composers.jsx";

export default function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      {/*<Searchbar />*/}
      <div>
        {/*<Sounds />*/}
  		<Composers />
      </div>
    </div>
  );
}
