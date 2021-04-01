import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results"

class Table extends Component {
  state = {
    // data: [],
    results:[],
    error: ""
  };

  // When the component mounts, make the API call to get 50 employees
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ results: res.results}))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <table className="table">
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Office Phone</th>
                <th>Cellphone</th>
                <th>Email</th>
            </tr>
        </thead>
        <Results results={this.state.results} />
    </table>

    );
  }
}

export default Table;
