import React from "react";
import Employee from "./Components/Employee";
import Nav from "./Components//Menus/Nav";
import LeftNav from "./Components/Menus/LeftNav";
import AddForm from "./Components/AddForm"
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="container-fluid">
        <Nav/>
            <LeftNav/>
            <Employee/>
        <AddForm/>
        <Footer/>
    </div>
  );
}

export default App;
