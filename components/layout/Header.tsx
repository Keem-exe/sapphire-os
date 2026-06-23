'use client';

import Link from 'next/link';
import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title?: string;
  showMenu?: boolean;
  onMenuClick?: () => void;
}

/**
 * Header Component
 * Top navigation bar with title and optional menu
 * Mobile-first responsive design
 */
export default function Header({ title = 'Sapphire OS', showMenu = true, onMenuClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    if (onMenuClick) {
      onMenuClick();
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
      <div className="flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8">
        {/* Logo/Title */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <span className="hidden sm:inline">{title}</span>
          <span className="sm:hidden">Sapphire</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/dashboard" label="Dashboard" />
          <NavLink href="/learn" label="Learn" />
          <NavLink href="/coach" label="Coach" />
          <NavLink href="/community" label="Community" />
          <NavLink href="/profile" label="Profile" />
        </nav>

        {/* Right Side - Menu */}
        {showMenu && (
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
              aria-label="Menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Dropdown Menu */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white hover:shadow-lg transition-shadow">
                  <span className="text-sm font-semibold">A</span>
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="min-w-[180px] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 p-1"
                  align="end"
                >
                  <DropdownMenu.Item className="px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                    <Link href="/profile/settings">Settings</Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-800" />
                  <DropdownMenu.Item className="px-3 py-2 text-sm rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 cursor-pointer">
                    Logout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <div className="flex flex-col">
            <MobileNavLink href="/dashboard" label="📊 Dashboard" onClick={handleMenuClick} />
            <MobileNavLink href="/learn" label="📚 Learn" onClick={handleMenuClick} />
            <MobileNavLink href="/coach" label="🤖 Coach" onClick={handleMenuClick} />
            <MobileNavLink href="/community" label="👥 Community" onClick={handleMenuClick} />
            <MobileNavLink href="/profile" label="👤 Profile" onClick={handleMenuClick} />
            <div className="border-t border-gray-200 dark:border-gray-800">
              <MobileNavLink href="/profile/settings" label="⚙️ Settings" onClick={handleMenuClick} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-b border-gray-200 dark:border-gray-800"
    >
      {label}
    </Link>
  );
}
