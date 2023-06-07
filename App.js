import React from "react";
import Card from "./Card";
import { cardData } from "./cardData";

function App() {
  return (
    <div className="columns is-mobile">
      {cardData.map((card) => (
        <div class="column">
          <div class="card">
            <Card cardObject={card} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
