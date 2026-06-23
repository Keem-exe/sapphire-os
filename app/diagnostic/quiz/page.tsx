/**
 * Diagnostic Quiz Page
 * Main assessment flow with questions
 */

'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDiagnostic } from '@/lib/diagnostic-context';
import {
  QuestionDisplay,
  QuestionProgress,
  QuestionNavigation,
  SubjectTabs,
} from '@/components/diagnostic/QuestionComponents';

export default function DiagnosticQuizPage() {
  const router = useRouter();
  const { state, completeDiagnostic, questions, currentQuestion } = useDiagnostic();
  const [isComplete, setIsComplete] = useState(false);

  const subjectQuestions = questions.filter((q) => q.subject === state.currentSubject);
  const isLastQuestion = state.currentQuestionIndex === subjectQuestions.length - 1;
  const bothSubjectsAnswered =
    state.answers.filter((a) => {
      const question = questions.find((q) => q.id === a.questionId);
      return question?.subject === 'Mathematics';
    }).length > 0 &&
    state.answers.filter((a) => {
      const question = questions.find((q) => q.id === a.questionId);
      return question?.subject === 'English Language';
    }).length > 0;

  useEffect(() => {
    if (isComplete) {
      completeDiagnostic();
      router.push('/diagnostic/results');
    }
  }, [isComplete, completeDiagnostic, router]);

  const handleFinish = () => {
    setIsComplete(true);
  };

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading question...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Diagnostic Assessment
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {state.answers.length} question{state.answers.length !== 1 ? 's' : ''} answered
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-800 space-y-6">
        {/* Subject Tabs */}
        <SubjectTabs />

        {/* Progress */}
        <QuestionProgress />

        {/* Question Display */}
        <QuestionDisplay />

        {/* Navigation */}
        <div className="space-y-3">
          <QuestionNavigation />

          {/* Finish Button (shown on last question of last subject) */}
          {isLastQuestion && state.currentSubject === 'English Language' && bothSubjectsAnswered && (
            <button
              onClick={handleFinish}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
            >
              Complete Assessment & View Results
            </button>
          )}
        </div>

        {/* Info */}
        {isLastQuestion && state.currentSubject === 'Mathematics' && (
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-sm text-gray-700 dark:text-gray-300">
            After you finish Mathematics questions, switch to English Language to continue the assessment.
          </div>
        )}
      </div>

      {/* Time Info */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Take your time — there's no time limit for this assessment.
      </p>
    </div>
  );
}
