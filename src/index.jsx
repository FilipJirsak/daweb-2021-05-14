import React from "react";
import { render } from "react-dom";
import "./style.css";

import Checkbox from "./components/Checkbox";
import ContentWithMenu from "./components/ContentWithMenu";

const sporty = [
  { nazev: "Běh", narocnost: 1 },
  { nazev: "Jízda na kole", narocnost: 3 },
  { nazev: "Plavání", narocnost: 5 },
  { nazev: "Šachy", narocnost: 10 },
];

const Sport = ({ nazev, pocetHvezdicek }) => {
  return (
    <div>
      {nazev}
      {new Array(pocetHvezdicek).fill("🧡")}
    </div>
  );
};

const zobrazSport = (item, index) => {
  return <Sport nazev={item.nazev} pocetHvezdicek={item.narocnost} key={index} />;
};

const vytvorVypisSportu = (sporty) => {
  const result = [];
  for (let index = 0; index < sporty.length; index++) {
    const item = sporty[index];
    const sportElement = <Sport nazev={item.nazev} pocetHvezdicek={item.narocnost} key={index} />;
    result.push(sportElement);
  }
  return result;
  //  return `Počet sportů: ${sporty.length}`;
  //  return sporty.map(zobrazSport);
};

const App = () => {
  const cislo = 5;

  return (
    <div className="container">
      <header>
        <div className="logo"></div>
        <h1>Webová aplikace</h1>
      </header>
      <main>
        <h1>Oblíbené sporty</h1>
        {sporty.map((item) => (
          <Checkbox label={item.nazev} />
        ))}
        <ContentWithMenu />
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
