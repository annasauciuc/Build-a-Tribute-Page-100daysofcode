import React, { Component } from "react";

import "./Card.css";
import ExternalLink from "../ExternalLink/ExternalLink";

const Card = ({ classStyle, text, title, hrefGit, mood, date, languages }) => {
  return (
    <div className="d-flex    mb-3 col-xs-12 col-sm-6 col-md-4">
      <div className="card-body ">
        <h4 className="card-title  font-weight-bold text-center ">{title}</h4>

        <p className="text-center ">
          <b>{text}</b>
        </p>
        <p className="">
          Moods:<b> {mood}</b>
        </p>
        <p className="text-justify">
          {" "}
          Date: <b> {date}</b>
        </p>

        <p>
          See code :{" "}
          <ExternalLink
            title="See Code"
            className="btn    g-font-weight-600 rounded p-2"
            href={hrefGit}
          >
            <i className={classStyle} />
          </ExternalLink>
        </p>

        <div className="d-flex footer ">
          <div className="ml-auto">
            {languages.map((lang, i) => {
              return <i className={lang} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
