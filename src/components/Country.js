import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Country(props) {
  return (
    <div className="list-group">
      <Link className="list-group-item list-group-item-action" to={`/${props.id}`}>{props.flag} {props.name}</Link>
    </div>
  );
}

export default Country;