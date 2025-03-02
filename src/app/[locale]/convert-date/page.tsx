"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const converters = [
  { id: "shamsi", label: "شمسی به میلادی و قمری" },
  { id: "miladi", label: "میلادی به شمسی و قمری" },
  { id: "ghamari", label: "قمری به شمسی و میلادی" },
];

// Enhanced conversion function with day support
const convertDate = (type: string, year: number, month: number, day: number) => {
  // Format the date with year, month, and day in different formats
  const formatDate = (year: number, month: number, day: number) => {
    // Format: YYYY Month DD
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December"];
    const longFormat = `${year} ${monthNames[month - 1]} ${day}`;
    
    // Format: YY/MM/DD
    const shortFormat = `${String(year).slice(-2)}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
    
    return { longFormat, shortFormat };
  };

  switch (type) {
    case "shamsi":
      // Simple conversion logic - in a real app, this would use proper calendar conversion
      const miladiYear = year + 621;
      const ghamariYear = year + 622;
      
      return { 
        miladi: {
          ...formatDate(miladiYear, month, day),
          year: miladiYear,
          month,
          day
        }, 
        ghamari: {
          ...formatDate(ghamariYear, month, day),
          year: ghamariYear,
          month,
          day
        } 
      };
    case "miladi":
      const shamsiYear = year - 621;
      const ghamariYear2 = year - 1;
      
      return { 
        shamsi: {
          ...formatDate(shamsiYear, month, day),
          year: shamsiYear,
          month,
          day
        }, 
        ghamari: {
          ...formatDate(ghamariYear2, month, day),
          year: ghamariYear2,
          month,
          day
        } 
      };
    case "ghamari":
      const shamsiYear2 = year - 622;
      const miladiYear2 = year + 1;
      
      return { 
        shamsi: {
          ...formatDate(shamsiYear2, month, day),
          year: shamsiYear2,
          month,
          day
        }, 
        miladi: {
          ...formatDate(miladiYear2, month, day),
          year: miladiYear2,
          month,
          day
        } 
      };
    default:
      return {};
  }
};

export default function DateConverter() {
  const [selectedConverter, setSelectedConverter] = useState(converters[0].id);
  const [year, setYear] = useState(1403);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [result, setResult] = useState<any>({});

  const handleConvert = () => {
    const conversion = convertDate(selectedConverter, year, month, day);
    setResult(conversion);
  };

  // Get the days in a month (simplified)
  const getDaysInMonth = (year: number, month: number) => {
    // This is simplified - a real implementation would consider leap years
    const daysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    return daysInMonth[month - 1] || 30;
  };

  return (
    <motion.div 
      className="mx-auto flex w-full max-w-md flex-col items-center gap-6 rounded-2xl border border-teal-300 bg-white p-8 shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-bold text-teal-700">{converters.find((c) => c.id === selectedConverter)?.label}</h1>
      
      <div className="w-full">
        <label className="mb-2 block text-right text-teal-700">نوع تبدیل:</label>
        <select
          value={selectedConverter}
          onChange={(e) => setSelectedConverter(e.target.value)}
          className="w-full rounded-lg border border-teal-500 bg-white p-3 text-lg focus:ring-2 focus:ring-teal-500"
        >
          {converters.map((converter) => (
            <option key={converter.id} value={converter.id}>{converter.label}</option>
          ))}
        </select>
      </div>
      
      <div className="w-full">
        <label className="mb-2 block text-right text-teal-700">سال:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full rounded-lg border border-teal-500 bg-white p-3 text-center text-lg focus:ring-2 focus:ring-teal-500"
          placeholder="سال"
        />
      </div>
      
      <div className="w-full">
        <label className="mb-2 block text-right text-teal-700">ماه:</label>
        <input
          type="number"
          value={month}
          onChange={(e) => {
            const newMonth = Number(e.target.value);
            setMonth(newMonth);
            // Adjust day if it exceeds the max days in the selected month
            const maxDays = getDaysInMonth(year, newMonth);
            if (day > maxDays) {
              setDay(maxDays);
            }
          }}
          className="w-full rounded-lg border border-teal-500 bg-white p-3 text-center text-lg focus:ring-2 focus:ring-teal-500"
          placeholder="ماه"
          min="1"
          max="12"
        />
      </div>
      
      <div className="w-full">
        <label className="mb-2 block text-right text-teal-700">روز:</label>
        <input
          type="number"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
          className="w-full rounded-lg border border-teal-500 bg-white p-3 text-center text-lg focus:ring-2 focus:ring-teal-500"
          placeholder="روز"
          min="1"
          max={getDaysInMonth(year, month)}
        />
      </div>
      
      <motion.button
        onClick={handleConvert}
        className="w-full rounded-lg bg-teal-500 px-6 py-3 text-lg text-white transition-all hover:bg-teal-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        تبدیل
      </motion.button>
      
      {Object.keys(result).length > 0 && (
        <motion.div 
          className="w-full rounded-lg border border-teal-300 bg-teal-50 p-5 text-center text-lg shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {result.miladi && (
            <div className="mb-2 border-b border-teal-200 pb-2">
              <p className="font-bold text-teal-700">میلادی:</p>
              <p className="text-teal-700">{result.miladi.longFormat}</p>
              <p className="text-teal-700">{result.miladi.shortFormat}</p>
            </div>
          )}
          {result.shamsi && (
            <div className="mb-2 border-b border-teal-200 pb-2">
              <p className="font-bold text-teal-700">شمسی:</p>
              <p className="text-teal-700">{result.shamsi.longFormat}</p>
              <p className="text-teal-700">{result.shamsi.shortFormat}</p>
            </div>
          )}
          {result.ghamari && (
            <div>
              <p className="font-bold text-teal-700">قمری:</p>
              <p className="text-teal-700">{result.ghamari.longFormat}</p>
              <p className="text-teal-700">{result.ghamari.shortFormat}</p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}