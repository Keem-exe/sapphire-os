/**
 * Diagnostic Results Page
 * Shows assessment results, proficiency scores, and recommendations
 */

'use client';

import { useRouter } from 'next/navigation';
import { useDiagnostic } from '@/lib/diagnostic-context';

export default function DiagnosticResultsPage() {
  const router = useRouter();
  const { getResults } = useDiagnostic();
  const results = getResults();

  if (!results) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-600 dark:text-gray-400">Loading results...</p>
        </div>
      </div>
    );
  }

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 80) return 'from-green-500 to-emerald-600';
    if (proficiency >= 60) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-rose-600';
  };

  const getProficiencyLevel = (proficiency: number) => {
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 60) return 'Intermediate';
    if (proficiency >= 40) return 'Basic';
    return 'Needs Improvement';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Assessment Complete! 🎉
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Here's your personalized diagnostic report
        </p>
      </div>

      {/* Overall Proficiency */}
      <div className={`bg-gradient-to-r ${getProficiencyColor(results.overallProficiency)} rounded-lg shadow-lg p-8 text-white space-y-4`}>
        <div className="text-center">
          <p className="text-sm opacity-90 font-medium">OVERALL PROFICIENCY</p>
          <p className="text-5xl font-bold mt-2">{results.overallProficiency}%</p>
          <p className="text-lg mt-2 opacity-95">{getProficiencyLevel(results.overallProficiency)}</p>
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex-1 text-center">
            <p className="opacity-90">Correct Answers</p>
            <p className="text-2xl font-bold">
              {results.mathematics.correctAnswers + results.englishLanguage.correctAnswers}
            </p>
          </div>
          <div className="flex-1 text-center">
            <p className="opacity-90">Total Questions</p>
            <p className="text-2xl font-bold">
              {results.mathematics.totalQuestions + results.englishLanguage.totalQuestions}
            </p>
          </div>
          <div className="flex-1 text-center">
            <p className="opacity-90">Time Taken</p>
            <p className="text-2xl font-bold">
              {Math.round(results.totalTime / 60)} min
            </p>
          </div>
        </div>
      </div>

      {/* Subject Results */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Mathematics */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mathematics</h2>
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-blue-500 to-blue-600`}
            >
              {results.mathematics.proficiency}%
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Performance</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {results.mathematics.correctAnswers} / {results.mathematics.totalQuestions} correct
              </p>
            </div>

            {results.mathematics.strengths.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                  ✓ Strengths
                </p>
                <div className="flex flex-wrap gap-2">
                  {results.mathematics.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {results.mathematics.weaknesses.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">
                  ⚠️ Areas to Improve
                </p>
                <div className="flex flex-wrap gap-2">
                  {results.mathematics.weaknesses.map((weakness) => (
                    <span
                      key={weakness}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm"
                    >
                      {weakness}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
                Recommended Focus
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {results.mathematics.recommendedFocus}
              </p>
            </div>
          </div>
        </div>

        {/* English Language */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">English Language</h2>
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-purple-500 to-purple-600`}
            >
              {results.englishLanguage.proficiency}%
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Performance</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {results.englishLanguage.correctAnswers} / {results.englishLanguage.totalQuestions} correct
              </p>
            </div>

            {results.englishLanguage.strengths.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                  ✓ Strengths
                </p>
                <div className="flex flex-wrap gap-2">
                  {results.englishLanguage.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {results.englishLanguage.weaknesses.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">
                  ⚠️ Areas to Improve
                </p>
                <div className="flex flex-wrap gap-2">
                  {results.englishLanguage.weaknesses.map((weakness) => (
                    <span
                      key={weakness}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm"
                    >
                      {weakness}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <p className="text-sm font-semibold text-purple-900 dark:text-purple-300 mb-1">
                Recommended Focus
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {results.englishLanguage.recommendedFocus}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-8 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Your Learning Path</h3>
        <ul className="space-y-3">
          {results.nextSteps.map((step, index) => (
            <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-blue-400 font-bold">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => router.push('/dashboard')}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          Start Learning on Dashboard →
        </button>

        <button
          onClick={() => router.push('/onboarding/summary')}
          className="w-full py-3 px-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Back to Profile
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Your diagnostic results have been saved. You can retake this assessment anytime to track your progress.
      </p>
    </div>
  );
}
