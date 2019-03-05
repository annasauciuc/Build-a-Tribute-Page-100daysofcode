import React, { Component } from "react";

import "./Card.css";

const Card = props => {
  const { classStyle, text, title ,classStyleI} = props;

  return (
    <div className="card mb-3   col-xs-12 col-sm-6 col-md-4">
     
      <div className="card-body">
        <h4
          className="card-title font-weight-bold text-center "
          
        >
          {title}
        </h4>

        <p className="text-justify ">{text}</p>
        <i className={classStyle} />
        <i className={classStyleI} />
      </div>
    </div>
  );
};

export default Card;
