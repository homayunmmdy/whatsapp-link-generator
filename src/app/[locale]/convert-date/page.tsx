"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { DateConverter } from "./util"; // Import the DateConverter class

export default function DateConverterPage() {
  const [selectedConverter, setSelectedConverter] = useState(DateConverter.options[0].id);
  const [year, setYear] = useState(1403);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [result, setResult] = useState<any>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const handleConvert = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const conversion = DateConverter.convertDate(selectedConverter, year, month, day); // Use the DateConverter class
      setResult(conversion);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-50 to-white p-4">
      <motion.div 
        className="mx-auto flex w-full max-w-md flex-col items-center gap-6 rounded-3xl border-none bg-white p-8 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: "0 10px 40px rgba(20, 184, 166, 0.15)" }}
      >
        <motion.div 
          className="mb-1 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500"
          whileHover={{ scale: 1.05 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </motion.div>
        
        <h1 className="mb-3 text-3xl font-bold text-teal-700">
          {DateConverter.options.find((c) => c.id === selectedConverter)?.label}
        </h1>
        
        <div className="mb-2 w-full">
          <select
            value={selectedConverter}
            onChange={(e) => setSelectedConverter(e.target.value)}
            className="w-full rounded-xl border-0 bg-teal-50 p-4 text-lg transition-all duration-200 hover:bg-teal-100 focus:ring-2 focus:ring-teal-500"
          >
            {DateConverter.options.map((converter) => (
              <option key={converter.id} value={converter.id}>{converter.label}</option>
            ))}
          </select>
        </div>
        
        <div className="grid w-full grid-cols-3 gap-3">
          <div className="col-span-1">
            <label className="mb-2 block text-right text-sm font-medium text-teal-700">سال:</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-full rounded-xl border-0 bg-teal-50 p-3 text-center text-lg transition-all duration-200 hover:bg-teal-100 focus:ring-2 focus:ring-teal-500"
              placeholder="سال"
            />
          </div>
          
          <div className="col-span-1">
            <label className="mb-2 block text-right text-sm font-medium text-teal-700">ماه:</label>
            <input
              type="number"
              value={month}
              onChange={(e) => {
                const newMonth = Number(e.target.value);
                setMonth(newMonth);
                // Adjust day if it exceeds the max days in the selected month
                const maxDays = DateConverter.getDaysInMonth(year, newMonth); // Use the DateConverter class
                if (day > maxDays) {
                  setDay(maxDays);
                }
              }}
              className="w-full rounded-xl border-0 bg-teal-50 p-3 text-center text-lg transition-all duration-200 hover:bg-teal-100 focus:ring-2 focus:ring-teal-500"
              placeholder="ماه"
              min="1"
              max="12"
            />
          </div>
          
          <div className="col-span-1">
            <label className="mb-2 block text-right text-sm font-medium text-teal-700">روز:</label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              className="w-full rounded-xl border-0 bg-teal-50 p-3 text-center text-lg transition-all duration-200 hover:bg-teal-100 focus:ring-2 focus:ring-teal-500"
              placeholder="روز"
              min="1"
              max={DateConverter.getDaysInMonth(year, month)} // Use the DateConverter class
            />
          </div>
        </div>
        
        <motion.button
          onClick={handleConvert}
          className="mt-4 w-full rounded-xl bg-teal-500 px-6 py-4 text-lg font-medium text-white transition-all hover:bg-teal-600"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ boxShadow: "0 4px 14px rgba(20, 184, 166, 0.3)" }}
        >
          {isAnimating ? (
            <span className="flex items-center justify-center">
              <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              در حال تبدیل...
            </span>
          ) : "تبدیل"}
        </motion.button>
        
        {Object.keys(result).length > 0 && (
          <motion.div 
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 p-6 text-center text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {result.miladi && (
              <motion.div 
                className="mb-4 border-b border-teal-300 pb-4"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="mb-1 text-xl font-bold text-white">میلادی:</p>
                <p className="text-white opacity-90">{result.miladi.longFormat}</p>
                <p className="text-sm text-white opacity-75">{result.miladi.shortFormat}</p>
              </motion.div>
            )}
            {result.shamsi && (
              <motion.div 
                className="mb-4 border-b border-teal-300 pb-4"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="mb-1 text-xl font-bold text-white">شمسی:</p>
                <p className="text-white opacity-90">{result.shamsi.longFormat}</p>
                <p className="text-sm text-white opacity-75">{result.shamsi.shortFormat}</p>
              </motion.div>
            )}
            {result.ghamari && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="mb-1 text-xl font-bold text-white">قمری:</p>
                <p className="text-white opacity-90">{result.ghamari.longFormat}</p>
                <p className="text-sm text-white opacity-75">{result.ghamari.shortFormat}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}