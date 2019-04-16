import React from "react";

import "./Card.css";
import ExternalLink from "../ExternalLink/ExternalLink";

const Card = ({
  classStyle,
  text,
  title,
  hrefGit,
  mood,
  date,
  languages,
  research
}) => {
  return (
    <div  data-aos="zoom-in-right"
     className="cards mt-5 col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className="card-body rounded-top">
        <h4 className="card-title  font-weight-bold text-center ">{title}</h4>

        <p className="text-center">
          <b>{text}</b>
        </p>
        <li>
          Mood:<b> {mood}</b>
        </li>
        <li>
          Research:<b> {research}</b>
        </li>
        <li className="text-justify">
          {" "}
          Date: <b> {date}</b>
        </li>

        <li className="lastLi">
          See code :{" "}
          <ExternalLink
            title="See Code"
            className="btn g-font-weight-600 rounded p-2"
            href={hrefGit}
          >
            <i className={classStyle} />
          </ExternalLink>
        </li>
      </div>
      <div className="d-flex pt-2 pb-3 rounded-bottom footer-card">
        <div className="ml-auto">
          {languages.map((lang, i) => {
            return <i className={lang} key={"lang" + i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
