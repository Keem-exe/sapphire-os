/**
 * Diagnostic Assessment Layout
 * Wraps diagnostic flow with DiagnosticProvider
 */

import { DiagnosticProvider } from '@/lib/diagnostic-context';

export default function DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return (
    <DiagnosticProvider>
      <div className="min-h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {children}
        </div>
      </div>
    </DiagnosticProvider>
  );
}
