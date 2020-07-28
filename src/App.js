import React from 'react';
import './App.css';
import {Person} from "./components/Person/Person";
import {Starship} from "./components/Starship/Starship";
import {Planet} from "./components/Planet/Planet";
import {ItemHOK} from "./components/HOKItem/ItemHOK";

function App() {


  return (
    <div>
      Star Wars Info
        {ItemHOK(Person, "people")}
      {ItemHOK(Starship, "starships")}
      {ItemHOK(Planet, "planets")}
    </div>
  );
}

export default App;
