import React, { Component } from "react";

import Card from "./../Card";
import "./Cards.css";

const Cards = ({ days }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {days.map((card, i) => {
          return (
            <Card
              key={i}
              languages={card.languages}
              mood={card.mood}
              src={card.src}
              hrefGit={card.hrefGit}
              id={card.id}
              date={card.date}
              classStyle={card.classStyle}
              classStyleI={card.classStyleI}
              text={card.text}
              title={card.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
