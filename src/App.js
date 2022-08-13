import React from "react";
import Header from "./Header";
import Nav from "./Nav"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="container">
      <Nav/>
      <Header title="Employee App"/>
    </div>
  );
}

export default App;
