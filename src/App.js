import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import View from "./View"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/view" element={<View/>}></Route>        
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
