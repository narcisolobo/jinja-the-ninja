"use client";

import { HiMenu } from "react-icons/hi";

interface HamburgerButtonProps {
  onClick: () => void;
}

function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg p-2.5 text-lg text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      <HiMenu />
    </button>
  );
}

export default HamburgerButton;
