// src/pages/HomePage.tsx

import countries from '../data/countries.json'; // ✅ This is correct
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 grid-rows-1 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
        {countries.map((country) => (
          <div
            key={country.slug}
            className="bg-white border border-gray-200 rounded-t-3xl rounded-b-xl shadow-lg p-2 hover:shadow-2xl transition duration-300"
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
