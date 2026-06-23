/**
 * Diagnostic Assessment - Redirect to start
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DiagnosticPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/diagnostic/start');
  }, [router]);

  return (
    <div className="min-h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading assessment...</p>
      </div>
    </div>
  );
}
