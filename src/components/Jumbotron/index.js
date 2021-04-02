import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" classNameName on the appropriate navigation link item
function Jumbotron() {
  return (
    <div className="jumbotron">
        <h1>ACS Employee Directory</h1>
        <p className="lead">A list of all ACS employees. Click on any column name to sort the table or use the Search button below to search any of the columns for a particular employee.</p>

    </div>
  );
}

export default Jumbotron;