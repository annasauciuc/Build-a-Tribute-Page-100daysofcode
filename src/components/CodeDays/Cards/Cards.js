import React, { Component } from "react";
import { getDayCards } from "../../../services/getDay";
import Card from "./../Card";
import "./Cards.css";


const Cards = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      {getDayCards().map((card, i) => {
          console.log(card.hrefGit)
          
        return <Card  key={i} mood={card.mood} src={card.src} hrefGit={card.hrefGit} id={card.id} classStyle={card.classStyle} classStyleI={card.classStyleI} text={card.text} title={card.title} />;
      })}
    </div>
    </div>
  );
};

export default Cards;
