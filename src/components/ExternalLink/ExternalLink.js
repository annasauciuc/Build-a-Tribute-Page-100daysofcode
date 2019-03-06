import React from "react";

const ExternalLink = ({ title, href, children,className }) => (
  <a title={title} href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
export default ExternalLink;
