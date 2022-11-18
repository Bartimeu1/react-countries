import React, { useState, useEffect } from 'react';

import Controls from '../components/Controls';
import List from '../components/List';

export default function MainPage({countries}) {
  const [filteredCountries, setfilteredCountries] = useState(countries);
  
  useEffect(() => {
    setfilteredCountries(countries)
  }, [countries]);

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
