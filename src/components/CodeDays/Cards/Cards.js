import React, { Component } from "react";
import { getDayCards } from "../../../services/getDay";
import Card from "./../Card";
import "./Cards.css";


const Cards = () => {
  return (
    <div className="d-flex flex-wrap ml-5 container-fluid main">
      {getDayCards().map((card, i) => {
          console.log(card)
          
        return <Card  key={i} id={card.id} classStyle={card.classStyle} classStyleI={card.classStyleI} text={card.text} title={card.title} />;
      })}
    </div>
  );
};

export default Cards;
