import React from "react";
import Employee from "./Components/Employee";
import Nav from "./Components//Menus/Nav";
import LeftNav from "./Components/Menus/LeftNav";
import AddForm from "./Components/AddForm"
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="container-fluid main">
        <Nav/>
        <div className="row">
          <div className="col-md-2">
            <LeftNav/>
          </div>
          <div className="col-md-10">
            <Employee/>
          </div>
        </div>
        <AddForm/>
        <Footer/>
    </div>
  );
}

export default App;
