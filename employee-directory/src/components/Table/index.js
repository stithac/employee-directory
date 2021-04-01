import React, { Component } from "react";
import API from "../../utils/API";

class Table extends Component {
  state = {
    results:[],
    error: ""
  };

  // When the component mounts, make the API call to get 50 employees
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ results: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Table;
