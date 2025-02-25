"use client";
import { useState } from "react";

interface Country {
  name: string;
  code: string;
}

const countries: Country[] = [
  { name: "Iran", code: "+98" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "India", code: "+91" },
  { name: "China", code: "+86" },
  { name: "Japan", code: "+81" },
  { name: "Brazil", code: "+55" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  { name: "Russia", code: "+7" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "South Korea", code: "+82" },
  { name: "Mexico", code: "+52" },
  { name: "Turkey", code: "+90" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "South Africa", code: "+27" },
  { name: "United Arab Emirates", code: "+971" },
];

export default function WhatsAppLinkGenerator() {
  const [countryCode, setCountryCode] = useState("+98");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPhoneNumber = phoneNumber.replace(/^0+/, "");
    const fullPhoneNumber = `${countryCode}${formattedPhoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 md:p-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-xl">
        {/* Header - Full Width */}
        <div className="bg-black px-8 py-6">
          <h1 className="text-center text-2xl font-bold text-white md:text-3xl">WhatsApp Link Generator</h1>
          <p className="mt-1 text-center text-sm text-gray-300">Create professional custom chat links instantly</p>
        </div>

        {/* Two-column layout container */}
        <div className="flex flex-col md:flex-row">
          {/* Form Column */}
          <div className="w-full p-6 md:w-1/2 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Country</label>
                <div className="relative">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
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

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number (without leading zero)"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter a pre-filled message..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white shadow-md transition duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Generate Link
              </button>

              {/* Generated Link Section - Visible on mobile */}
              {generatedLink && (
                <div className="mt-6 md:hidden">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Your WhatsApp Link</label>
                    <div className="break-all rounded-lg border border-gray-200 bg-white p-3 text-sm">
                      <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                        {generatedLink}
                      </a>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 py-2 font-medium text-gray-800 transition duration-200 hover:bg-gray-300"
                    >
                      {copied ? (
                        <>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                          </svg>
                          Copy Link
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Info & Generated Link Column */}
          <div className="w-full border-t border-gray-200 bg-gray-50 p-6 md:w-1/2 md:border-l md:border-t-0 md:p-8">
            {/* Generated Link Section - Hidden on mobile, visible on desktop */}
            {generatedLink && (
              <div className="mb-8 hidden md:block">
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <label className="mb-2 block text-sm font-medium text-gray-700">Your WhatsApp Link</label>
                  <div className="break-all rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm">
                    <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
                      {generatedLink}
                    </a>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 py-2 font-medium text-gray-800 transition duration-200 hover:bg-gray-300"
                  >
                    {copied ? (
                      <>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                        </svg>
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Info Section */}
            <div>
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                About WhatsApp Link Generator
              </h2>
              
              <div className="prose prose-sm text-gray-600">
                <p className="mb-4">
                  WhatsApp requires users to save your phone number before messaging you. This tool eliminates that step by creating direct chat links that work instantly.
                </p>
                
                <div className="mb-6">
                  <h3 className="mb-2 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-800">How It Works</h3>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>Select your country code</li>
                    <li>Enter your phone number without leading zeros</li>
                    <li>Add an optional pre-filled message</li>
                    <li>Generate and share your personalized link</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="mb-2 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-800">Perfect For</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Business cards and marketing materials</li>
                    <li>Email signatures and social media profiles</li>
                    <li>Websites and online portfolios</li>
                    <li>Streamlining customer communication</li>
                  </ul>
                </div>
                
                <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm italic text-gray-500">
                  &quot;The WhatsApp Link Generator is an elegant solution for professionals who want to provide a direct communication channel without the friction of contact saving.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}