import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ALL_COUNTRIES } from "../config";
import Controls from '../components/Controls';
import List from '../components/List';

export default function MainPage() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState(countries);

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES)
      .then(response => {
        const countriesData = response.data;
        setCountries(countriesData);
        setfilteredCountries(countriesData);
      })
    }
  }, []);

  const HandleFilter = (search, region) => {
    let data = [...countries];
    if (region != 'All') {
      data = data.filter(c => c.region.includes(region));
    }
    if (search) {
      data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }
    setfilteredCountries(data);
  }

  return (
    <>
      <Controls HandleFilter={HandleFilter}></Controls>
      <List filteredCountries={filteredCountries}></List>
    </>
  )
}
