// CountrySelectContext.js
import React, { createContext, useContext, useState } from 'react';

const CountrySelectContext = createContext();

export const useCountrySelect = () => useContext(CountrySelectContext);

export const CountrySelectProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const onCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <CountrySelectContext.Provider value={{ selectedCountry, onCountryChange }}>
      {children}
    </CountrySelectContext.Provider>
  );
};
