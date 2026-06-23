'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊', label: 'Home' },
  { name: 'Learn', href: '/learn', icon: '📚', label: 'Skills' },
  { name: 'Coach', href: '/coach', icon: '🤖', label: 'AI Coach' },
  { name: 'Community', href: '/community', icon: '👥', label: 'Community' },
  { name: 'Profile', href: '/profile', icon: '👤', label: 'Profile' },
];

/**
 * BottomNav Component
 * 5-tab navigation for mobile/tablet
 * Sticky bottom positioning with safe area support
 */
export default function BottomNav() {
  const pathname = usePathname();

  // Determine if we're in a main section
  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard' || pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex justify-around">
        {navItems.map(item => (
          <NavTab
            key={item.href}
            {...item}
            active={isActive(item.href)}
          />
        ))}
      </div>
    </nav>
  );
}

interface NavTabProps extends NavItem {
  active: boolean;
}

function NavTab({ name, href, icon, label, active }: NavTabProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center justify-center flex-1 h-16 transition-all duration-200',
        'relative group',
        active
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
      )}
    >
      {/* Animated background for active tab */}
      {active && (
        <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/10 rounded-t-lg" />
      )}

      {/* Icon */}
      <span
        className={cn(
          'text-2xl mb-1 transition-transform duration-200',
          'group-hover:scale-110',
          active && 'scale-110'
        )}
      >
        {icon}
      </span>

      {/* Label */}
      <span
        className={cn(
          'text-xs font-medium transition-all duration-200',
          'truncate px-1',
          active ? 'opacity-100' : 'opacity-75 group-hover:opacity-100'
        )}
      >
        {label}
      </span>

      {/* Active indicator */}
      {active && (
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-full"
          style={{
            animation: 'slideIn 0.3s ease-out',
          }}
        />
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }
      `}</style>
    </Link>
  );
}
