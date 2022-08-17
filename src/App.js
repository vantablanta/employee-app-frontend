import React from "react";
import Employee from "./Components/Employee";
import Nav from "./Components//Menus/Nav";
import LeftNav from "./Components/Menus/LeftNav";
import AddForm from "./Components/AddForm"
import Footer from "./Components/Footer"


import Popup from "./Components/PopUp";

function App() {
  return (
    <div className="container-fluid">
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
        <Popup/>

        <Footer/>

    </div>
  );
}

export default App;
