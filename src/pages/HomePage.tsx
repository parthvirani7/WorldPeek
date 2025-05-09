// src/pages/HomePage.tsx

import { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
  fetch('/countries.json')
    .then((res) => res.json())
    .then((data) => setCountries(data));
}, []);

  return (


    <div className="country-list">
      {countries.map((country) => (
        <CountryCard 
          key={country.slug} 
          name={country.name} 
          flagUrl={country.flagUrl} 
          countrySlug={country.slug} 
        />
      ))}
    </div>
  );
};

export default HomePage;
