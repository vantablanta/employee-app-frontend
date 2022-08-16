import React from "react";
import AddForm from "./Components/AddForm";
import Employee from "./Components/Employee";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="container">
        <Nav/>
        <AddForm/>
        <Employee/>
    </div>
  );
}

export default App;
