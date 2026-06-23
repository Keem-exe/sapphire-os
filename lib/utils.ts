import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to combine classnames with Tailwind CSS support
 * Merges classnames and resolves Tailwind CSS conflicts
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string, format: string = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (format === 'short') {
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  if (format === 'long') {
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  if (format === 'time') {
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return d.toISOString();
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if device is mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

/**
 * Get safe area values for notch handling
 */
export function getSafeAreaValues(): {
  top: string;
  bottom: string;
  left: string;
  right: string;
} {
  if (typeof window === 'undefined') {
    return { top: '0', bottom: '0', left: '0', right: '0' };
  }

  const top = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-top)') || '0';
  const bottom = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-bottom)') || '0';
  const left = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-left)') || '0';
  const right = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-right)') || '0';

  return { top, bottom, left, right };
}
