import React from "react";
import { Link } from "react-router-dom";
import BasicStyledLink from "./BasicStyledLink";

const LinkWithStyles = ({ to, className, children, ...props }) => (
  <Link to={to} className={className} {...props}>
    {children}
  </Link>
);

export default BasicStyledLink(LinkWithStyles);
