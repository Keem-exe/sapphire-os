'use client';

import { ReactNode } from 'react';
import { getSafeAreaValues } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface SafeAreaProviderProps {
  children: ReactNode;
}

/**
 * SafeAreaProvider Component
 * Handles safe area insets for notched devices (iPhone, iPad)
 * Applies padding to account for notches, home indicators, etc.
 */
export default function SafeAreaProvider({ children }: SafeAreaProviderProps) {
  const [safeArea, setSafeArea] = useState({
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
  });

  useEffect(() => {
    // Update safe area values on mount and resize
    const updateSafeArea = () => {
      if (typeof window !== 'undefined') {
        const top = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-top)').trim();
        const bottom = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-bottom)').trim();
        const left = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-left)').trim();
        const right = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-right)').trim();

        setSafeArea({
          top: top || '0px',
          bottom: bottom || '0px',
          left: left || '0px',
          right: right || '0px',
        });
      }
    };

    updateSafeArea();
    window.addEventListener('resize', updateSafeArea);
    return () => window.removeEventListener('resize', updateSafeArea);
  }, []);

  return (
    <div
      style={{
        paddingTop: `max(env(safe-area-inset-top), 0px)`,
        paddingBottom: `max(env(safe-area-inset-bottom), 0px)`,
        paddingLeft: `max(env(safe-area-inset-left), 0px)`,
        paddingRight: `max(env(safe-area-inset-right), 0px)`,
      }}
    >
      {children}
    </div>
  );
}
