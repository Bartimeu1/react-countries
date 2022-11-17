import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>

       <Route 
          exact 
          path='/' 
          element={<MainPage></MainPage>}
        ></Route>
        
      </Routes>
    </>
  );
}

export default App;
