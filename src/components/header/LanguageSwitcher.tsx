'use client';

import { LanguagesConfig } from '@/app/config/langs';
import useGetCurrentLanuge from '@/app/hooks/useGetCurrentLanuge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, {  useState } from 'react';

const LanguageSwitcher = () => {
    const pathname = usePathname()

  const [currentLanguage, setCurrentLanguage] = useState<string>(useGetCurrentLanuge);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    setShowLanguageMenu(false);
  };
 
  const url = pathname.slice(4)

  return (
    <div className="relative">
      <button
        onClick={() => setShowLanguageMenu(!showLanguageMenu)}
        className="mx-3 flex items-center text-gray-300 transition-colors duration-200 hover:text-white"
      >
        <span className="mr-1 font-medium">{currentLanguage.toUpperCase()}</span>
        <svg 
          className="h-4 w-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>
      
      {showLanguageMenu && (
        <div className="absolute left-0 right-0 z-10 mt-2 w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {LanguagesConfig.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}/${url}`}
                onClick={() => changeLanguage(lang.code)}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                {lang.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;