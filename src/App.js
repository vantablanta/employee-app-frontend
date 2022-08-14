import React from "react";

import Nav from "./Nav";
import View from "./View"
import Employee from "./Employee"
import Update from "./Update"
import Delete from  "./Delete"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/view" element={<View/>}></Route>
          <Route path="/add" element={<Employee/>}></Route>   
          <Route path="/update" element={<Update/>}></Route>   
          <Route path="/delete" element={<Delete/>}></Route>          
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
