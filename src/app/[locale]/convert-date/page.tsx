"use client"
import { useState } from "react";

const converters = [
  { id: "shamsi", label: "شمسی به میلادی و قمری" },
  { id: "miladi", label: "میلادی به شمسی و قمری" },
  { id: "ghamari", label: "قمری به شمسی و میلادی" },
];

const convertDate = (type: string, year: number) => {
  switch (type) {
    case "shamsi":
      return { miladi: year + 621, ghamari: year + 622 };
    case "miladi":
      return { shamsi: year - 621, ghamari: year - 1 };
    case "ghamari":
      return { shamsi: year - 622, miladi: year + 1 };
    default:
      return {};
  }
};

export default function DateConverter() {
  const [selectedConverter, setSelectedConverter] = useState(converters[0].id);
  const [year, setYear] = useState(1403);
  const [result, setResult] = useState<{ miladi?: number; shamsi?: number; ghamari?: number }>({});

  const handleConvert = () => {
    const conversion = convertDate(selectedConverter, year);
    setResult(conversion);
  };

  return (
    <div className="mx-auto flex w-80 flex-col items-center gap-6 rounded-lg bg-gray-100 p-6 shadow-md">
      <h1 className="text-xl font-bold text-gray-700">{converters.find((c) => c.id === selectedConverter)?.label}</h1>
      <select
        value={selectedConverter}
        onChange={(e) => setSelectedConverter(e.target.value)}
        className="w-full rounded-md border p-2"
      >
        {converters.map((converter) => (
          <option key={converter.id} value={converter.id}>{converter.label}</option>
        ))}
      </select>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        className="w-full rounded-md border p-2 text-center"
      />
      <button
        onClick={handleConvert}
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        تبدیل
      </button>
      {Object.keys(result).length > 0 && (
        <div className="w-full rounded-md bg-white p-4 text-center shadow-md">
          {result.miladi && <p className="text-gray-700">میلادی: {result.miladi}</p>}
          {result.shamsi && <p className="text-gray-700">شمسی: {result.shamsi}</p>}
          {result.ghamari && <p className="text-gray-700">قمری: {result.ghamari}</p>}
        </div>
      )}
    </div>
  );
}
