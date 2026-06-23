/**
 * Onboarding - Step 1 Redirect
 * Redirects to the first step of onboarding
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/onboarding/step-1');
  }, [router]);

  return (
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading onboarding...</p>
    </div>
  );
}
