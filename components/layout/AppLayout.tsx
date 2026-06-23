'use client';

import { ReactNode } from 'react';
import Header from './Header';
import BottomNav from './BottomNav';
import SafeAreaProvider from './SafeAreaProvider';

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
}

/**
 * AppLayout Component
 * Main layout wrapper with header, bottom navigation, and safe area support
 * Responsive design: mobile-first with desktop adaptations
 * Phase 1 implementation
 */
export default function AppLayout({ children, title = 'Sapphire OS' }: AppLayoutProps) {
  return (
    <SafeAreaProvider>
      <div className="h-screen w-full flex flex-col overflow-hidden bg-white dark:bg-gray-950">
        {/* Header - Sticky top */}
        <Header title={title} />

        {/* Main Content Area */}
        <main
          className="flex-1 overflow-y-auto overflow-x-hidden pb-20 md:pb-0"
          style={{
            // Add padding for safe area at bottom on mobile
            paddingBottom: 'max(env(safe-area-inset-bottom), 0px)',
          }}
        >
          {/* Content wrapper with responsive padding */}
          <div className="w-full h-full animate-in fade-in-50 duration-300">
            {children}
          </div>
        </main>

        {/* Bottom Navigation - Mobile/Tablet only (hidden on desktop) */}
        <div className="md:hidden">
          <BottomNav />
        </div>

        {/* Desktop Sidebar Navigation - Optional (for future enhancement) */}
        {/* This can be added in Phase 2 if needed */}
      </div>
    </SafeAreaProvider>
  );
}
