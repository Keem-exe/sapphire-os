/**
 * Diagnostic Assessment Page
 * Phase 2: Placeholder for diagnostic assessment
 * Will be implemented in Phase 3
 */

'use client';

import { useRouter } from 'next/navigation';

export default function DiagnosticPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Diagnostic Assessment
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Phase 3 - Coming Soon
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <p className="text-gray-700 dark:text-gray-300">
              The diagnostic assessment will help us identify your specific knowledge gaps and create a personalized learning path.
            </p>
          </div>

          <button
            onClick={handleContinue}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Continue to Dashboard →
          </button>
        </div>
      </div>
    </div>
  );
}
