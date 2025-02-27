'use client';

import React from 'react';

type MobileMenuButtonProps = {
  onClick: () => void;
};

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={onClick}
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
  );
};

export default MobileMenuButton;