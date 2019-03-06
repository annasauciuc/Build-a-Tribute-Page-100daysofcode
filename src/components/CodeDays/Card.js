import React, { Component } from "react";

import "./Card.css";
import ExternalLink from "../ExternalLink/ExternalLink";

const Card = props => {
  const { classStyle, text, title, classStyleI, hrefGit, mood ,src} = props;


  return (
    <div className="d-flex    mb-3 col-xs-12 col-sm-6 col-md-4">
      <div className="card-body ">
        <h4 className="card-title  font-weight-bold text-center ">{title}</h4>

        <p className="text-justify ">
          <b>{text}</b>
        </p>
        <p className="text-justify ">
          {" "}
          Mood: <b> {mood}</b>
        </p>
     <div className="mb-1">   <img src={src} alt=""/></div>
        <ExternalLink
        title="See Code"
          className="btn btn-outline-secondary   g-font-weight-600 rounded p-2"
          href={hrefGit}
        >
        
          <i className={classStyle} />
        </ExternalLink>
        <div className="d-flex ">
          <div className="ml-auto">
            <i className="devicon-html5-plain colored mr-1" />
            <i className="devicon-css3-plain colored  mr-1" />
            <i className="devicon-javascript-plain colored  mr-1" />
            <i className="devicon-react-plain colored  mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
