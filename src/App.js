import React from "react";
import LeftNav from "./Components/Menus/LeftNav";
import Footer from "./Components/Footer"
import TopMenu from "./Components/Menus/TopMenu";

function App() {
  
  return (
    <div className="container-fluid">
      <TopMenu/>
      <LeftNav/>
      <Footer/>

    </div>
  );
}

export default App;
