import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">

        <Wrapper>
            <Table />
        </Wrapper>

      </div>
      <Footer />
    </div>

  );
}

export default App;