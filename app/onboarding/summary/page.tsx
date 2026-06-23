/**
 * Onboarding Summary
 * Final screen showing personalized profile and option to start diagnostic
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '@/lib/onboarding-context';
import { useAuth } from '@/lib/auth-context';

export default function SummaryPage() {
  const router = useRouter();
  const { data } = useOnboarding();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Generate study style based on frequency
  const getStudyStyle = () => {
    switch (data.studyFrequency) {
      case 'Every day':
        return 'Dedicated Learner';
      case '4-6 times per week':
        return 'Consistent Learner';
      case '2-3 times per week':
        return 'Regular Learner';
      case 'Once a week':
        return 'Casual Learner';
      default:
        return 'Beginning Learner';
    }
  };

  // Generate recommended pace
  const getRecommendedPace = () => {
    switch (data.focusDuration) {
      case 'Less than 10 minutes':
        return '10 Minutes Daily';
      case '10-20 minutes':
        return '15 Minutes Daily';
      case '20-30 minutes':
        return '25 Minutes Daily';
      case '30-45 minutes':
        return '40 Minutes Daily';
      default:
        return '50 Minutes Daily';
    }
  };

  // Determine starting focus based on confidence
  const getStartingFocus = () => {
    const mathConf = data.confidenceMath || 3;
    const engConf = data.confidenceEnglish || 3;

    // Start with the weaker subject, or worry subject if tied
    if (mathConf < engConf) {
      return 'Foundational Concepts in Mathematics';
    } else if (engConf < mathConf) {
      return 'Writing Techniques in English';
    } else {
      // If equal, check worry subject
      if (data.worrySubject === 'Mathematics') {
        return 'Foundational Concepts in Mathematics';
      } else if (data.worrySubject === 'English Language') {
        return 'Writing Techniques in English';
      }
      return 'Foundational Concepts';
    }
  };

  const handleStartDiagnostic = async () => {
    setIsLoading(true);
    try {
      // TODO: Save onboarding data to backend
      // For now, just navigate to diagnostic
      router.push('/diagnostic');
    } catch (error) {
      console.error('Error starting diagnostic:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Your Personalized Learning Profile Is Ready 🎉
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Let's get you started on your CSEC journey!
        </p>
      </div>

      {/* Profile Summary Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Goal Card */}
        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Goal</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{data.targetGrade}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{data.mainGoal}</p>
        </div>

        {/* Confidence Card */}
        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Confidence Level</p>
          <div className="flex gap-2 mt-2">
            <div className="flex-1">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Math</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded ${
                      i < (data.confidenceMath || 3)
                        ? 'bg-purple-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">English</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded ${
                      i < (data.confidenceEnglish || 3)
                        ? 'bg-purple-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Study Style Card */}
        <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Study Style</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {getStudyStyle()}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{data.studyFrequency}</p>
        </div>

        {/* Pace Card */}
        <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Recommended Pace</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {getRecommendedPace()}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {data.focusDuration}
          </p>
        </div>
      </div>

      {/* Starting Focus Section */}
      <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
        <h2 className="text-lg font-semibold mb-2">Starting Focus</h2>
        <p className="mb-4">{getStartingFocus()}</p>
        <p className="text-sm text-blue-100">
          This is where we'll begin based on your confidence levels and subjects selected.
        </p>
      </div>

      {/* Profile Details */}
      <div className="space-y-3">
        <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <span className="text-gray-600 dark:text-gray-400">Subjects</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {data.subjects?.join(', ')}
          </span>
        </div>
        <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <span className="text-gray-600 dark:text-gray-400">Learning Method</span>
          <span className="font-semibold text-gray-900 dark:text-white text-right">
            {data.learningMethods?.slice(0, 2).join(', ')}
          </span>
        </div>
        <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <span className="text-gray-600 dark:text-gray-400">Motivation</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {data.motivationType}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleStartDiagnostic}
        disabled={isLoading}
        className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Setting up...
          </>
        ) : (
          <>
            Start Diagnostic Assessment
            <span>→</span>
          </>
        )}
      </button>

      {/* Info Text */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        The diagnostic assessment will take about 10-15 minutes and help us identify your specific
        areas for improvement.
      </p>
    </div>
  );
}
