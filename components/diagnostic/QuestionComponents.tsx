/**
 * Diagnostic Question Display Component
 * Shows question, options, and submission
 */

'use client';

import { useState } from 'react';
import { useDiagnostic } from '@/lib/diagnostic-context';

export function QuestionDisplay() {
  const { currentQuestion, submitAnswer, state } = useDiagnostic();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  if (!currentQuestion) {
    return <div className="text-center text-gray-600">Loading question...</div>;
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      submitAnswer(selectedAnswer);
      setIsAnswered(true);
    }
  };

  const currentAnswer = state.answers.find((a) => a.questionId === currentQuestion.id);
  const isAlreadyAnswered = !!currentAnswer;

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {currentQuestion.question}
        </h2>
        <div className="flex gap-2 mt-3">
          <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
            {currentQuestion.topic}
          </span>
          <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">
            {currentQuestion.difficulty}
          </span>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAlreadyAnswered) {
                setSelectedAnswer(index);
              }
            }}
            disabled={isAlreadyAnswered}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              isAlreadyAnswered
                ? 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 opacity-60 cursor-not-allowed'
                : selectedAnswer === index
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
            } ${
              isAlreadyAnswered && index === currentAnswer?.selectedAnswer
                ? currentAnswer.isCorrect
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                : ''
            } ${isAlreadyAnswered && index === currentQuestion.correctAnswer ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-semibold ${
                  selectedAnswer === index && !isAlreadyAnswered
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : isAlreadyAnswered && index === currentAnswer?.selectedAnswer
                      ? currentAnswer.isCorrect
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-red-500 bg-red-500 text-white'
                      : isAlreadyAnswered && index === currentQuestion.correctAnswer
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-400 dark:border-gray-500'
                }`}
              >
                {isAlreadyAnswered && index === currentAnswer?.selectedAnswer
                  ? currentAnswer.isCorrect
                    ? '✓'
                    : '✗'
                  : isAlreadyAnswered && index === currentQuestion.correctAnswer
                    ? '✓'
                    : String.fromCharCode(65 + index)}
              </div>
              <span className="text-gray-900 dark:text-white">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {isAnswered && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Explanation</h3>
          <p className="text-gray-700 dark:text-gray-300">{currentQuestion.explanation}</p>
        </div>
      )}

      {/* Submit Button */}
      {!isAlreadyAnswered && (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Submit Answer
        </button>
      )}
    </div>
  );
}

export function QuestionProgress() {
  const { state, questions } = useDiagnostic();
  const subjectQuestions = questions.filter((q) => q.subject === state.currentSubject);
  const currentQuestionNumber = state.currentQuestionIndex + 1;
  const totalQuestions = subjectQuestions.length;

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600 dark:text-gray-400">
          Question {currentQuestionNumber} of {totalQuestions}
        </span>
        <span className="font-semibold text-gray-900 dark:text-white">
          {state.currentSubject}
        </span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all"
          style={{
            width: `${((currentQuestionNumber - 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export function QuestionNavigation() {
  const { nextQuestion, previousQuestion, state, questions } = useDiagnostic();
  const subjectQuestions = questions.filter((q) => q.subject === state.currentSubject);
  const isFirstQuestion = state.currentQuestionIndex === 0;
  const isLastQuestion = state.currentQuestionIndex === subjectQuestions.length - 1;
  const currentAnswer = state.answers.find(
    (a) => a.questionId === questions[state.currentQuestionIndex]?.id
  );

  return (
    <div className="flex gap-3">
      <button
        onClick={previousQuestion}
        disabled={isFirstQuestion}
        className="flex-1 py-3 px-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>
      <button
        onClick={nextQuestion}
        disabled={!currentAnswer || isLastQuestion}
        className="flex-1 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  );
}

export function SubjectTabs() {
  const { state, switchSubject } = useDiagnostic();

  return (
    <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
      {(['Mathematics', 'English Language'] as const).map((subject) => (
        <button
          key={subject}
          onClick={() => switchSubject(subject)}
          className={`px-4 py-3 font-medium transition-colors ${
            state.currentSubject === subject
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
          }`}
        >
          {subject}
        </button>
      ))}
    </div>
  );
}
