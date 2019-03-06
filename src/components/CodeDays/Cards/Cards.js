import React, { Component } from "react";
import { getDayCards } from "../../../services/getDay";
import Card from "./../Card";
import "./Cards.css";


const Cards = (props) => {
  const {days}= props;
  console.log("dd",days);
  return (
    <div className="container-fluid">
    <div className="row">
      {days.map((card, i) => {
          console.log(getDayCards)
          console.log(card)
          
          
        return <Card  key={i} mood={card.mood} src={card.src} hrefGit={card.hrefGit} id={card.id} classStyle={card.classStyle} classStyleI={card.classStyleI} text={card.text} title={card.title} />;
      })}
    </div>
    </div>
  );
};

export default Cards;
