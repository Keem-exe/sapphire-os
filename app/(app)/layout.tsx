import AppLayout from '@/components/layout/AppLayout';

/**
 * App Route Group Layout
 * Wraps all protected routes with:
 * - Header with navigation
 * - Bottom navigation (mobile/tablet)
 * - Safe area support for notches
 * - Responsive design (mobile-first)
 */

export default function RootAppLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
