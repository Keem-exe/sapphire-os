/**
 * Onboarding Layout
 * Wrapper for all onboarding steps with step indicator
 */

import { OnboardingProvider } from '@/lib/onboarding-context';

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <OnboardingProvider>
      <div className="min-h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </OnboardingProvider>
  );
}
