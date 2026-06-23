/**
 * Diagnostic Assessment - Start Page
 * Introduction and instructions before beginning the quiz
 */

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DiagnosticStartPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    router.push('/diagnostic/quiz');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Diagnostic Assessment 📋
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Let's identify your strengths and areas for improvement
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 space-y-6">
        {/* Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How it works</h2>
          <p className="text-gray-600 dark:text-gray-400">
            This adaptive diagnostic assessment will:
          </p>
          <ul className="space-y-3 pl-4">
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>Assess your knowledge in <strong>Mathematics</strong> and <strong>English Language</strong></span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>Cover <strong>basic, intermediate, and advanced</strong> topics</span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>Identify your <strong>strengths</strong> and <strong>areas for improvement</strong></span>
            </li>
            <li className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>Generate <strong>personalized recommendations</strong> for study</span>
            </li>
          </ul>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">30</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Questions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">15 min</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Approx. Time</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">2</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Subjects</p>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span>⚠️</span> Important Tips
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Answer honestly - there's no "right" difficulty level</li>
            <li>• Read questions carefully</li>
            <li>• Don't worry if you can't answer all questions</li>
            <li>• You can review explanations after each answer</li>
            <li>• Your results will help personalize your learning path</li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleStart}
          disabled={isLoading}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Starting...
            </>
          ) : (
            <>
              Begin Assessment →
            </>
          )}
        </button>

        <button
          onClick={() => router.push('/onboarding/summary')}
          className="w-full py-3 px-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Back to Profile
        </button>
      </div>

      {/* Info Text */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        This assessment typically takes <strong>10-15 minutes</strong> to complete.
        <br />
        Make sure you have enough time and a quiet environment.
      </p>
    </div>
  );
}
