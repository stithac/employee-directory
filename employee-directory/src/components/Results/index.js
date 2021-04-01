import React from "react";
// import "./style.css";

function Results(props) {
  return (
    <tbody>
        {props.results.map(result => (
                <tr key={result.login.uuid}>
                    <td><img alt="Employee Photo" src={result.picture.large} /></td>
                    <td><p> {result.name.first} {result.name.last}</p></td>
                    <td><p> {result.phone} </p></td>
                    <td><p> {result.cell} </p></td>
                    <td><p> {result.email} </p></td>
                </tr>
            ))}
        </tbody>
  );
}

export default Results;
