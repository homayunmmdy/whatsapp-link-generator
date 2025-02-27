'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type MenuItem = {
  name: string;
  href: string;
};

type DropdownItem = {
  name: string;
  items: MenuItem[];
};

type MainMenuProps = {
  mainMenuItems: MenuItem[];
  dropdownMenuItems: DropdownItem[];
};

const MainMenu = ({ mainMenuItems, dropdownMenuItems }: MainMenuProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="hidden flex-1 justify-center md:flex">
      <ul className="flex items-center gap-4">
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
  );
};

export default MainMenu;