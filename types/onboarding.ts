/**
 * Onboarding Data Types
 * Defines the structure for user profile data collected during onboarding
 */

/**
 * Form/Grade levels available
 */
export type FormLevel = 'Form 1' | 'Form 2' | 'Form 3' | 'Form 4' | 'Form 5' | 'Upper 6' | 'Lower 6';

/**
 * CSEC subjects (MVP: Math & English only)
 */
export type CSECSubject = 'Mathematics' | 'English Language';

/**
 * Exam timing options
 */
export type ExamTiming = 'This year' | 'Next year' | 'More than a year away' | 'Not sure';

/**
 * User goals
 */
export type UserGoal =
  | 'Pass CSEC'
  | 'Improve grades'
  | 'Get a Grade I'
  | 'Prepare for school exams'
  | 'Build confidence'
  | 'Improve weak areas';

/**
 * Target grades
 */
export type TargetGrade = 'Grade I' | 'Grade II' | 'Grade III' | 'Just want to pass';

/**
 * Study frequency options
 */
export type StudyFrequency =
  | 'Every day'
  | '4-6 times per week'
  | '2-3 times per week'
  | 'Once a week'
  | 'Rarely';

/**
 * Focus duration options
 */
export type FocusDuration =
  | 'Less than 10 minutes'
  | '10-20 minutes'
  | '20-30 minutes'
  | '30-45 minutes'
  | 'More than 45 minutes';

/**
 * Response to incorrect answers
 */
export type IncorrectAnswerResponse =
  | 'Try again immediately'
  | 'Ask for help'
  | 'Look up the answer'
  | 'Skip it'
  | 'Get frustrated and move on';

/**
 * Learning methods (select up to 2)
 */
export type LearningMethod =
  | 'Practice questions'
  | 'Step-by-step explanations'
  | 'Flashcards'
  | 'Videos'
  | 'Challenges'
  | 'Quizzes';

/**
 * How Sapphire can help (select multiple)
 */
export type SapphireHelp =
  | 'Remind me to study'
  | 'Create a daily study plan'
  | 'Focus on weak areas'
  | 'Challenge me when I\'m doing well'
  | 'Explain mistakes'
  | 'Track my progress';

/**
 * Motivation type (choose one)
 */
export type MotivationType =
  | 'Seeing progress'
  | 'Earning XP'
  | 'Streaks'
  | 'Achievements'
  | 'Competition'
  | 'Improving grades';

/**
 * Competition preference
 */
export type CompetitionPreference = 'Yes' | 'Sometimes' | 'No';

/**
 * Confidence level (1-5 scale)
 */
export type ConfidenceLevel = 1 | 2 | 3 | 4 | 5;

/**
 * Full onboarding data collected across all sections
 */
export interface OnboardingData {
  // Section 1: About You
  name: string;
  formLevel: FormLevel;
  subjects: CSECSubject[];
  examTiming: ExamTiming;

  // Section 2: Goals & Motivation
  mainGoal: UserGoal;
  worrySubject: 'Mathematics' | 'English Language' | 'Neither';
  confidenceMath: ConfidenceLevel;
  confidenceEnglish: ConfidenceLevel;
  targetGrade: TargetGrade;

  // Section 3: Learning Habits
  studyFrequency: StudyFrequency;
  focusDuration: FocusDuration;
  incorrectAnswerResponse: IncorrectAnswerResponse;
  learningMethods: LearningMethod[]; // Up to 2

  // Section 4: Personalization
  sapphireHelp: SapphireHelp[]; // Multiple selections
  motivationType: MotivationType;
  competitionPreference: CompetitionPreference;

  // Metadata
  createdAt?: Date;
  completedAt?: Date;
}

/**
 * Partial onboarding data for step validation
 */
export type OnboardingDataPartial = Partial<OnboardingData>;

/**
 * Onboarding context type
 */
export interface OnboardingContextType {
  data: OnboardingDataPartial;
  currentStep: number;
  updateData: (section: keyof OnboardingData, value: any) => void;
  setCurrentStep: (step: number) => void;
  resetOnboarding: () => void;
}
