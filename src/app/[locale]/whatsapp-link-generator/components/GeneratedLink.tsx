// components/GeneratedLink.tsx
import { useState } from "react";

interface GeneratedLinkProps {
  link: string;
}

export default function GeneratedLink({ link }: GeneratedLinkProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <label className="mb-2 block text-sm font-medium text-gray-700">Your WhatsApp Link</label>
      <div className="break-all rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
          {link}
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
  );
}