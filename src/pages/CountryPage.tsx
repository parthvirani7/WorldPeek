// src/pages/CountryPage.tsx

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryPage = () => {
  const { slug } = useParams();
  const [countryDetails, setCountryDetails] = useState<any>(null);

  useEffect(() => {
    // Fetch country details from a public API or your backend
    fetch(`/api/countries/${slug}`)
      .then((res) => res.json())
      .then((data) => setCountryDetails(data));
  }, [slug]);

  if (!countryDetails) return <div>Loading...</div>;

  return (
    <div className="country-details">
      <h1>{countryDetails.name}</h1>
      <img src={countryDetails.flagUrl} alt={`${countryDetails.name} flag`} />
      <p>Capital: {countryDetails.capital}</p>
      <p>Population: {countryDetails.population}</p>
      <p>States: {countryDetails.states}</p>
      {/* Add more details like famous personalities, influencers, etc. */}
    </div>
  );
};

export default CountryPage;
