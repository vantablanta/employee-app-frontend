import React from "react";
import LeftNav from "./Components/Menus/LeftNav";
import Footer from "./Components/Footer"
import TopMenu from "./Components/Menus/TopMenu";
import Popup from "./Components/PopUp"

function App() {
  
  return (
    <div className="container-fluid">
      <TopMenu/>
      <LeftNav/>
      <Footer/>
      <Popup/>

    </div>
  );
}

export default App;
