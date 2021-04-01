import { get } from "jquery";
import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results";
import "./style.css";

class Table extends Component {
  state = {
    search:"",
    results:[],
    error: "",
    nameSort: "ascending",
    emailSort: "ascending",
    officeSort: "ascending",
    cellSort: "ascending"
  };

    // When the component mounts, make the API call to get 50 employees
    componentDidMount() {
        API.getEmployees()
        .then(res => this.setState({ results: res.results}))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // let filteredEmployees = [...this.state.results];
        this.setState({ search: event.target.value });

        const results = this.state.results;
        console.log(event.target.value);
        const filteredEmployees = results.filter(result => result.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || result.email.toLowerCase().includes(event.target.value.toLowerCase()) || result.phone.includes(event.target.value) || result.cell.includes(event.target.value));
        console.log(filteredEmployees);
        this.setState({results: filteredEmployees});
    };

    clearInput = event => {
        document.getElementById("searchInput").value = "";
    }

    sortTableByName = () => {
        let sortedEmployees = [...this.state.results];

        if ( this.state.nameSort === "ascending"){
            sortedEmployees.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return -1;
                }
                if (a.name.first > b.name.first) {
                    return 1;
                }

                return 0;
            });


            this.setState({results: sortedEmployees});
            this.setState({nameSort : "descending"})
        }

        if ( this.state.nameSort === "descending"){
            sortedEmployees.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return 1;
                }
                if (a.name.first> b.name.first) {
                    return -1;
                }
                return 0;
            });

            this.setState({results: sortedEmployees});
            this.setState({nameSort : "ascending"})
        }

            // console.log(sortedEmployees); // Testing
    }

    sortTableByEmail = () => {
        let sortedEmployees = [...this.state.results];

        if ( this.state.emailSort === "ascending"){
            sortedEmployees.sort((a, b) => {
                if (a.email < b.email) {
                    return -1;
                }
                if (a.email > b.email) {
                    return 1;
                }
                return 0;
            });

            this.setState({results: sortedEmployees});
            this.setState({emailSort : "descending"})
        }

        if ( this.state.emailSort === "descending"){
            sortedEmployees.sort((a, b) => {
                if (a.email < b.email) {
                    return 1;
                }
                if (a.email> b.email) {
                    return -1;
                }
                return 0;
            });

            this.setState({results: sortedEmployees});
            this.setState({emailSort : "ascending"})
        }

    }

    sortTableByOfficeNumber = () => {
        let sortedEmployees = [...this.state.results];

        if ( this.state.officeSort === "ascending"){
            sortedEmployees.sort((a, b) => {
                return parseInt(a.phone.charAt(1)) - parseInt(b.phone.charAt(1));
            });

            this.setState({results: sortedEmployees});
            this.setState({officeSort : "descending"})
        }

        if ( this.state.officeSort === "descending"){
            sortedEmployees.sort((a, b) => {
                return parseInt(b.phone.charAt(1)) - parseInt(a.phone.charAt(1));
            });

            this.setState({results: sortedEmployees});
            this.setState({officeSort : "ascending"})
        }
    }

    sortTableByCellNumber = () => {
        let sortedEmployees = [...this.state.results];
            if ( this.state.cellSort === "ascending"){
                sortedEmployees.sort((a, b) => {
                    return parseInt(a.cell.charAt(1)) - parseInt(b.cell.charAt(1));
                });

            this.setState({results: sortedEmployees});
            this.setState({cellSort : "descending"})
            }

            if ( this.state.cellSort === "descending"){
                sortedEmployees.sort((a, b) => {
                    return parseInt(b.cell.charAt(1)) - parseInt(a.cell.charAt(1));
                });

            this.setState({results: sortedEmployees});
            this.setState({cellSort : "ascending"})
            }
        }

  render() {
    return (
        <div>
            <form>
                <input id="searchInput" onChange={this.handleInputChange}></input>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th><button type="button" onClick={this.sortTableByName}>Name</button></th>
                        <th><button type="button" onClick={this.sortTableByOfficeNumber}>Office Phone</button></th>
                        <th><button type="button" onClick={this.sortTableByCellNumber}>Cell Phone</button></th>
                        <th><button type="button" onClick={this.sortTableByEmail}>Email</button></th>
                    </tr>
                </thead>
                <Results results={this.state.results} />
            </table>
        </div>


    );
  }
}

export default Table;
