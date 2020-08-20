import React from 'react';
import './App.css';
import {Person} from "./components/Person/Person";
import {Starship} from "./components/Starship/Starship";
import {Planet} from "./components/Planet/Planet";
import {ItemHOK} from "./components/HOKItem/ItemHOK";
import "./App.css"

function App() {


  return (
    <div className={"main"}>
      <div>
          <nav className="navbar custumized">
              <span className="navbar-brand mb-0 h1">Star wars info</span>
          </nav>
      </div>
        {ItemHOK(Person, "people")}
      {ItemHOK(Starship, "starships")}
      {ItemHOK(Planet, "planets")}
    </div>
  );
}

export default App;
