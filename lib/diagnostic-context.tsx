/**
 * Diagnostic Context
 * Manages quiz state, question navigation, and results calculation
 */

'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import {
  DiagnosticContextType,
  DiagnosticState,
  DiagnosticResults,
  DiagnosticResultsSubject,
  UserAnswer,
} from '@/types/diagnostic';
import { DIAGNOSTIC_QUESTIONS } from './diagnostic-questions';

const DiagnosticContext = createContext<DiagnosticContextType | undefined>(undefined);

const initialState: DiagnosticState = {
  currentQuestionIndex: 0,
  currentSubject: 'Mathematics',
  answers: [],
  startTime: new Date(),
  isComplete: false,
};

export function DiagnosticProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DiagnosticState>(initialState);
  const [results, setResults] = useState<DiagnosticResults | null>(null);

  const questions = DIAGNOSTIC_QUESTIONS;

  // Get current question
  const currentQuestion = useCallback(() => {
    const subjectQuestions = questions.filter((q) => q.subject === state.currentSubject);
    return subjectQuestions[state.currentQuestionIndex] || null;
  }, [state.currentQuestionIndex, state.currentSubject, questions]);

  // Submit answer
  const submitAnswer = useCallback(
    (selectedAnswer: number) => {
      const current = currentQuestion();
      if (!current) return;

      const isCorrect = selectedAnswer === current.correctAnswer;

      const newAnswer: UserAnswer = {
        questionId: current.id,
        selectedAnswer,
        isCorrect,
        timeTaken: Math.random() * 60, // Placeholder
      };

      setState((prev) => ({
        ...prev,
        answers: [...prev.answers, newAnswer],
      }));
    },
    [currentQuestion]
  );

  // Next question
  const nextQuestion = useCallback(() => {
    const subjectQuestions = questions.filter((q) => q.subject === state.currentSubject);

    if (state.currentQuestionIndex < subjectQuestions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  }, [state.currentQuestionIndex, state.currentSubject, questions]);

  // Previous question
  const previousQuestion = useCallback(() => {
    if (state.currentQuestionIndex > 0) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  }, [state.currentQuestionIndex]);

  // Switch subject
  const switchSubject = useCallback(
    (subject: 'Mathematics' | 'English Language') => {
      setState((prev) => ({
        ...prev,
        currentSubject: subject,
        currentQuestionIndex: 0,
      }));
    },
    []
  );

  // Calculate results
  const calculateResults = useCallback((): DiagnosticResults => {
    const endTime = new Date();
    const totalTime = Math.round((endTime.getTime() - state.startTime.getTime()) / 1000);

    // Calculate for each subject
    const subjects = ['Mathematics', 'English Language'] as const;
    const subjectResults: Record<string, DiagnosticResultsSubject> = {};

    subjects.forEach((subject) => {
      const subjectQuestions = questions.filter((q) => q.subject === subject);
      const subjectAnswers = state.answers.filter((a) => {
        const question = questions.find((q) => q.id === a.questionId);
        return question?.subject === subject;
      });

      const correctCount = subjectAnswers.filter((a) => a.isCorrect).length;
      const proficiency = subjectAnswers.length > 0 ? (correctCount / subjectAnswers.length) * 100 : 0;

      // Group by topic
      const topicStats: Record<
        string,
        { correct: number; total: number; difficulty: string }
      > = {};

      subjectAnswers.forEach((answer) => {
        const question = questions.find((q) => q.id === answer.questionId);
        if (!question) return;

        if (!topicStats[question.topic]) {
          topicStats[question.topic] = { correct: 0, total: 0, difficulty: question.difficulty };
        }
        topicStats[question.topic].total += 1;
        if (answer.isCorrect) {
          topicStats[question.topic].correct += 1;
        }
      });

      // Identify strengths and weaknesses
      const byTopic = Object.entries(topicStats).map(([topic, stats]) => ({
        topic,
        percentage: (stats.correct / stats.total) * 100,
        difficulty: stats.difficulty as any,
        questionsAnswered: stats.total,
      }));

      const strengths = byTopic
        .filter((t) => t.percentage >= 70)
        .sort((a, b) => b.percentage - a.percentage)
        .map((t) => t.topic)
        .slice(0, 3);

      const weaknesses = byTopic
        .filter((t) => t.percentage < 50)
        .sort((a, b) => a.percentage - b.percentage)
        .map((t) => t.topic)
        .slice(0, 3);

      const recommendedFocus = weaknesses.length > 0 ? weaknesses[0] : byTopic[0]?.topic || 'General Concepts';

      subjectResults[subject] = {
        subject,
        totalQuestions: subjectAnswers.length,
        correctAnswers: correctCount,
        proficiency: Math.round(proficiency),
        strengths,
        weaknesses,
        byTopic,
        recommendedFocus,
      };
    });

    const overallProficiency =
      (subjectResults.Mathematics.proficiency + subjectResults['English Language'].proficiency) / 2;

    const nextSteps: string[] = [];
    if (overallProficiency < 50) {
      nextSteps.push('Focus on foundational concepts');
      nextSteps.push('Work through basic practice questions');
    } else if (overallProficiency < 70) {
      nextSteps.push('Strengthen weak areas');
      nextSteps.push('Practice intermediate level questions');
    } else {
      nextSteps.push('Challenge yourself with advanced topics');
      nextSteps.push('Prepare for CSEC exams');
    }

    const diag: DiagnosticResults = {
      timestamp: endTime,
      totalTime,
      mathematics: subjectResults.Mathematics as any,
      englishLanguage: subjectResults['English Language'] as any,
      overallProficiency: Math.round(overallProficiency),
      nextSteps,
    };

    return diag;
  }, [state, questions]);

  // Complete diagnostic
  const completeDiagnostic = useCallback(() => {
    const calculatedResults = calculateResults();
    setResults(calculatedResults);
    setState((prev) => ({
      ...prev,
      isComplete: true,
    }));
  }, [calculateResults]);

  // Get results
  const getResults = useCallback(() => {
    return results;
  }, [results]);

  // Reset diagnostic
  const resetDiagnostic = useCallback(() => {
    setState(initialState);
    setResults(null);
  }, []);

  const value: DiagnosticContextType = {
    state,
    questions,
    currentQuestion: currentQuestion(),
    submitAnswer,
    nextQuestion,
    previousQuestion,
    switchSubject,
    completeDiagnostic,
    getResults,
    resetDiagnostic,
  };

  return (
    <DiagnosticContext.Provider value={value}>{children}</DiagnosticContext.Provider>
  );
}

export function useDiagnostic(): DiagnosticContextType {
  const context = useContext(DiagnosticContext);
  if (context === undefined) {
    throw new Error('useDiagnostic must be used within DiagnosticProvider');
  }
  return context;
}
