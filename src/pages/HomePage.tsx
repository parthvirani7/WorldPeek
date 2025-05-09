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
    <div className="bg-gray-100 p-8">
        
      <div className="grid grid-cols-6 grid-rows-1 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
        {countries.map((country) => (
          <div
            key={country.slug}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300"
          >
            <CountryCard
              name={country.name}
              flagUrl={country.flagUrl}
              countrySlug={country.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
