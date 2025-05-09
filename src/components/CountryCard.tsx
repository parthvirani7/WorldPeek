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
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Flag Image */}
        <img
          src={flagUrl}
          alt={`${name} Flag`}
          className="w-full h-32 object-cover rounded-t-2xl"
        />
        <div className="p-4">
          <p className="font-semibold text-lg text-center">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
