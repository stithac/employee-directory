import React from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="container">
        <Navbar />
        <Wrapper>
            <Table />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;