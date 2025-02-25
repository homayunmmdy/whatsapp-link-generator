interface PhoneNumberInput {
    value: string;
    onChange: (value: string) => void;
  }
  
  export default function PhoneNumberInput({ value, onChange }: PhoneNumberInput) {
    return (
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter phone number (without leading zero)"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />
      </div>
    );
  }