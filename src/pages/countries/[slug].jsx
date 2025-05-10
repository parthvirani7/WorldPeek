import { useRouter } from 'next/router';
import countries from '../../data/countries.json'; // ✅ tumhara data yahan hai

export default function CountryPage({ country }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{country.name}</h1>
      <img src={country.flagUrl} alt={`${country.name} flag`} width="200" />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Continent:</strong> {country.continent}</p>
      <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
      <p><strong>Languages:</strong> {country.languages?.join(', ')}</p>
      <p><strong>Famous Places:</strong> {country.famousPlaces?.join(', ')}</p>
      <p><strong>Famous Celebrities:</strong> {country.famousCelebrities?.join(', ')}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = countries.map((country) => ({
    params: { slug: country.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const country = countries.find((c) => c.slug === params.slug);

  return {
    props: {
      country: country || null,
    },
  };
}
