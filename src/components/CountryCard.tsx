// src/components/CountryCard.tsx

import { Link } from 'react-router-dom';

interface CountryCardProps {
  name: string;
  flagUrl: string;
  countrySlug: string;
  className?: string;
}

const CountryCard = ({ name, flagUrl, countrySlug, className = '' }: CountryCardProps) => {
  return (
    <Link to={`/country/${countrySlug}`} className={`block ${className}`}>
      <div className="bg-white p-4 shadow-lg text-center rounded-md cursor-pointer hover:shadow-xl transition-shadow">
        <img
          src={flagUrl}
          alt={`${name} Flag`}
          width={100}
          height={60}
          className="w-full h-20 object-cover mb-2"
        />
        <p className="font-medium">{name}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
