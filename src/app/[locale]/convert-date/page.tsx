
"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { DateConverter } from "./util"; // Import the DateConverter class

type ConversionResult = {
  miladi?: { longFormat: string; shortFormat: string };
  shamsi?: { longFormat: string; shortFormat: string };
  ghamari?: { longFormat: string; shortFormat: string };
};

export default function DateConverterPage() {
  const [selectedConverter, setSelectedConverter] = useState<string>(DateConverter.options[0].id);
  const [year, setYear] = useState<number>(1403);
  const [month, setMonth] = useState<number>(1);
  const [day, setDay] = useState<number>(1);
  const [result, setResult] = useState<ConversionResult>({});
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleConvert = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const conversion: ConversionResult = DateConverter.convertDate(selectedConverter, year, month, day);
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
        <h1 className="mb-3 text-3xl font-bold text-teal-700">
          {DateConverter.options.find((c) => c.id === selectedConverter)?.label}
        </h1>
       
        <select
          value={selectedConverter}
          onChange={(e) => setSelectedConverter(e.target.value)}
          className="w-full rounded-xl border-0 bg-teal-50 p-4 text-lg transition-all duration-200 hover:bg-teal-100 focus:ring-2 focus:ring-teal-500"
        >
          {DateConverter.options.map((converter) => (
            <option key={converter.id} value={converter.id}>{converter.label}</option>
          ))}
        </select>
       
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full rounded-xl border-0 bg-teal-50 p-3 text-center text-lg"
          placeholder="سال"
        />
       
        <input
          type="number"
          value={month}
          onChange={(e) => {
            const newMonth = Number(e.target.value);
            setMonth(newMonth);
            const maxDays = DateConverter.getDaysInMonth(year, newMonth);
            if (day > maxDays) {
              setDay(maxDays);
            }
          }}
          className="w-full rounded-xl border-0 bg-teal-50 p-3 text-center text-lg"
          placeholder="ماه"
          min="1"
          max="12"
        />
       
        <input
          type="number"
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
          className="w-full rounded-xl border-0 bg-teal-50 p-3 text-center text-lg"
          placeholder="روز"
          min="1"
          max={DateConverter.getDaysInMonth(year, month)}
        />
       
        <motion.button
          onClick={handleConvert}
          className="mt-4 w-full rounded-xl bg-teal-500 px-6 py-4 text-lg font-medium text-white"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {isAnimating ? "در حال تبدیل..." : "تبدیل"}
        </motion.button>
       
        {Object.keys(result).length > 0 && (
          <div className="mt-4 w-full rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 p-6 text-center text-lg">
            {result.miladi && (
              <div>
                <p className="text-white">میلادی: {result.miladi.longFormat}</p>
                <p className="text-white opacity-75">{result.miladi.shortFormat}</p>
              </div>
            )}
            {result.shamsi && (
              <div>
                <p className="text-white">شمسی: {result.shamsi.longFormat}</p>
                <p className="text-white opacity-75">{result.shamsi.shortFormat}</p>
              </div>
            )}
            {result.ghamari && (
              <div>
                <p className="text-white">قمری: {result.ghamari.longFormat}</p>
                <p className="text-white opacity-75">{result.ghamari.shortFormat}</p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
