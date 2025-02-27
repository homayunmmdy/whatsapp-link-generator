'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SiteConfig } from '@/app/config/site';
import MainMenu from './MainMenu';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuButton from './MobileMenuButton';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const config = SiteConfig();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          
          <MainMenu />
          
          <LanguageSwitcher />
          
          <MobileMenuButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;