import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Search from "./pages/Search";
import SignUpPage from "./pages/SignUpPage";
import SideNavbarComponent from "./Components/General/SideNavbarComponent";
import { useState } from 'react';


function App() {

  const [searchComponent, setSearchComponent] = useState(true);

  function onClick() {
    if(searchComponent == true){
      setSearchComponent(false);
    }else{
      setSearchComponent(true);
    }
  }

  return (
    <Router>
      <div style={{
        width
          :"10%", height: "100%", position: "fixed", marginTop: "0px"
      }}><SideNavbarComponent searchComponent = {searchComponent} onClick={onClick} /></div>

      <Routes>
        <Route path="/Login" element={<LoginPage />
        }>
        </Route>
        <Route path="/home" element={<Home />
        }>
        </Route>
        <Route path="/search" element={<Search searchComponent = {searchComponent} onClick={onClick} />
        }>
        </Route>
        <Route path="/create" element={<Create />
        }>
        </Route>
        <Route path="/Signup" element={<SignUpPage />
        }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
