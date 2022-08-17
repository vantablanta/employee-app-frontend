import React from "react";
import AddForm from "./Components/AddForm";
import Employee from "./Components/Employee";
import Nav from "./Components//Menus/Nav";

import Popup from "./Components/PopUp";

function App() {
  return (
    <div className="container">
        <Nav/>
        <AddForm/>
        <Employee/>
        <Popup/>

        

    </div>
  );
}

export default App;
