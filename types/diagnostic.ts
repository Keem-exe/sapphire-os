/**
 * Diagnostic Assessment Types
 * Data structures for questions, answers, and results
 */

/**
 * Question difficulty levels (for adaptive testing)
 */
export type Difficulty = 'Basic' | 'Intermediate' | 'Advanced';

/**
 * Single diagnostic question
 */
export interface DiagnosticQuestion {
  id: string;
  subject: 'Mathematics' | 'English Language';
  topic: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation: string;
}

/**
 * User's answer to a question
 */
export interface UserAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  timeTaken: number; // seconds
}

/**
 * Proficiency level breakdown
 */
export interface ProficiencyByTopic {
  topic: string;
  percentage: number;
  difficulty: Difficulty;
  questionsAnswered: number;
}

/**
 * Subject-specific diagnostic results
 */
export interface DiagnosticResultsSubject {
  subject: 'Mathematics' | 'English Language';
  totalQuestions: number;
  correctAnswers: number;
  proficiency: number; // 0-100
  strengths: string[]; // Topics with high proficiency
  weaknesses: string[]; // Topics with low proficiency
  byTopic: ProficiencyByTopic[];
  recommendedFocus: string; // Top weakness to focus on
}

/**
 * Complete diagnostic results
 */
export interface DiagnosticResults {
  userId?: string;
  timestamp: Date;
  totalTime: number; // seconds
  mathematics: DiagnosticResultsSubject;
  englishLanguage: DiagnosticResultsSubject;
  overallProficiency: number; // Average across both
  nextSteps: string[]; // Recommended actions
}

/**
 * Diagnostic state in context
 */
export interface DiagnosticState {
  currentQuestionIndex: number;
  currentSubject: 'Mathematics' | 'English Language';
  answers: UserAnswer[];
  startTime: Date;
  isComplete: boolean;
  results?: DiagnosticResults;
}

/**
 * Diagnostic context type
 */
export interface DiagnosticContextType {
  state: DiagnosticState;
  questions: DiagnosticQuestion[];
  currentQuestion: DiagnosticQuestion | null;
  submitAnswer: (selectedAnswer: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  switchSubject: (subject: 'Mathematics' | 'English Language') => void;
  completeDiagnostic: () => void;
  getResults: () => DiagnosticResults | null;
  resetDiagnostic: () => void;
}
