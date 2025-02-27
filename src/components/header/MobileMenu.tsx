'use client';

import React from 'react';
import Link from 'next/link';

type MenuItem = {
  name: string;
  href: string;
};

type DropdownItem = {
  name: string;
  items: MenuItem[];
};

type MobileMenuProps = {
  isOpen: boolean;
  mainMenuItems: MenuItem[];
  dropdownMenuItems: DropdownItem[];
};

const MobileMenu = ({ isOpen, mainMenuItems, dropdownMenuItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-16 w-full bg-black shadow-lg md:hidden">
      <ul className="flex flex-col space-y-4 p-4">
        {mainMenuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="block font-medium text-gray-300 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
        
        {dropdownMenuItems.map((dropdown) => (
          <li key={dropdown.name}>
            <button className="flex items-center font-medium text-gray-300 transition-colors duration-200 hover:text-white">
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
            <ul className="mt-2 space-y-2 pl-4">
              {dropdown.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-sm text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;