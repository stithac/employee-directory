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

  sortTable = (event) => {
        let sortedEmployees = [...this.state.results];
        let header = event.target.id;

        console.log(header); // Testing

        sortedEmployees.sort((a, b) => {
            if (a.name.first < b.name.first) {
            return -1;
            }
            if (a.name.first> b.name.first) {
            return 1;
            }
            return 0;
        });

        this.setState({results: sortedEmployees});
        console.log(sortedEmployees); // Testing
    }

  render() {
    return (
        <table className="table">
        <thead>
            <tr>
                <th>Picture</th>
                <th id="name" onClick={this.sortTable}>Name</th>
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
