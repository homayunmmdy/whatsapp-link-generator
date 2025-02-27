// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguagesConfig } from '../app/config/langs';
import { SiteConfig } from '@/app/config/site';

type MenuItem = {
  name: string;
  href: string;
};

type DropdownItem = {
  name: string;
  items: MenuItem[];
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);


  const mainMenuItems: MenuItem[] = [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    // { name: 'Contacts', href: '/contacts' },
  ];

  const dropdownMenuItems: DropdownItem[] = [
    {
      name: 'Technology',
      items: [
        { name: 'WhatsApp Link Generator', href: '/tools/whatsapp-link-generator' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    setShowLanguageMenu(false);
  };

  const config = SiteConfig();

  return (
    <header 
      className={`bg-black text-white w-full z-50 transition-all duration-300 ${
        isSticky ? 'fixed top-0 shadow-lg' : 'relative'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              {config.name}
            </Link>
          </div>
          
          <div className="hidden flex-1 justify-center md:flex">
            <ul className="flex items-center space-x-10">
              {mainMenuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-medium text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              
              {dropdownMenuItems.map((dropdown) => (
                <li 
                  key={dropdown.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(dropdown.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center font-medium text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    {dropdown.name}
                    <svg 
                      className="ml-1 h-4 w-4" 
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
                  
                  {activeDropdown === dropdown.name && (
                    <div className="absolute left-1/2 z-10 mt-2 w-48 -translate-x-1/2 transform rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {dropdown.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center text-gray-300 transition-colors duration-200 hover:text-white"
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
              <div className="absolute right-0 z-10 mt-2 w-36 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {LanguagesConfig.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;