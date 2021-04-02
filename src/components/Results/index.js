import React from "react";
import "./style.css";

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
