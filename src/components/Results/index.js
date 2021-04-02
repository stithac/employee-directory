import React from "react";
import "./style.css";

// Function maps the results pulled from the API call and renders the table rows with a column for name, phone, cell and email
function Results(props) {
  return (
    <tbody>
        {props.results.map(result => (
                <tr key={result.login.uuid}>
                    <td><img alt="Employee" src={result.picture.medium} /></td>
                    <td className="align-middle"><p> {result.name.first} {result.name.last}</p></td>
                    <td className="align-middle"><p> {result.phone} </p></td>
                    <td className="align-middle"><p> {result.cell} </p></td>
                    <td className="align-middle"><p> {result.email} </p></td>
                </tr>
            ))}
        </tbody>
  );
}

export default Results;
