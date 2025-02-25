interface Country {
  name: string;
  code: string;
}

interface CountrySelectProps {
  countries: Country[];
  value: string;
  onChange: (value: string) => void;
}

export default function CountrySelect({ countries, value, onChange }: CountrySelectProps) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">Country</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}