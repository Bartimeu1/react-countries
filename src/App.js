import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

import { ALL_COUNTRIES } from "./config";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import CountryPage from "./pages/CountryPage";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES)
      .then(response => {
        const countriesData = response.data;
        setCountries(countriesData);
      })
    }
  }, []);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route 
          exact 
          path='/' 
          element={<MainPage countries={countries}></MainPage>}
        ></Route>
        {countries.map(item => (
          <Route
            path={`/country/${item.name}`}
            element={<CountryPage name={item.name}></CountryPage>}
            key={item.name}
          ></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
