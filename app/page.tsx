'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sapphire OS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Intelligent Learning Platform for CSEC Mathematics & English
          </p>
        </div>

        <div className="grid gap-4 w-full max-w-md">
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-left">
            <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">✅ Phase 0 Setup Complete</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>✓ Next.js 16 with TypeScript</li>
              <li>✓ Tailwind CSS 4 configured</li>
              <li>✓ Radix UI components installed</li>
              <li>✓ API client setup (axios)</li>
              <li>✓ Authentication context ready</li>
              <li>✓ CI/CD pipeline configured</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-left">
            <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">📋 Next Steps</h3>
            <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
              <li>Configure .env.local with API settings</li>
              <li>Implement Phase 1: Layout & Navigation</li>
              <li>Build authentication pages</li>
              <li>Create home dashboard</li>
            </ol>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 max-w-lg">
          <p>
            This is a placeholder. View the{' '}
            <Link href="/docs/GETTING_STARTED.md" className="text-blue-600 hover:underline">
              Getting Started Guide
            </Link>{' '}
            for development setup instructions.
          </p>
        </div>
      </main>
    </div>
  );
}
