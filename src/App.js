import React from "react";
import LeftNav from "./Components/Menus/LeftNav";
import AddForm from "./Components/AddForm"
import Footer from "./Components/Footer"
// import Popup from "./Components/PopUp";

function App() {
  return (
    <div className="container-fluid">
        <LeftNav/>
        <AddForm/>
        {/* <Popup/> */}
        <Footer/>

    </div>
  );
}

export default App;
