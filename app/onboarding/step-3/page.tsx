/**
 * Onboarding Step 3: Learning Habits
 * Questions 9-12: Study Frequency, Focus Duration, Incorrect Answer Response, Learning Methods
 */

'use client';

import { useRouter } from 'next/navigation';
import {
  MultiChoice,
  Checkboxes,
  StepIndicator,
  FormButtons,
} from '@/components/onboarding/FormComponents';
import { useOnboarding } from '@/lib/onboarding-context';
import {
  StudyFrequency,
  FocusDuration,
  IncorrectAnswerResponse,
  LearningMethod,
} from '@/types/onboarding';

const STUDY_FREQUENCIES: StudyFrequency[] = [
  'Every day',
  '4-6 times per week',
  '2-3 times per week',
  'Once a week',
  'Rarely',
];

const FOCUS_DURATIONS: FocusDuration[] = [
  'Less than 10 minutes',
  '10-20 minutes',
  '20-30 minutes',
  '30-45 minutes',
  'More than 45 minutes',
];

const INCORRECT_RESPONSES: IncorrectAnswerResponse[] = [
  'Try again immediately',
  'Ask for help',
  'Look up the answer',
  'Skip it',
  'Get frustrated and move on',
];

const LEARNING_METHODS: LearningMethod[] = [
  'Practice questions',
  'Step-by-step explanations',
  'Flashcards',
  'Videos',
  'Challenges',
  'Quizzes',
];

export default function Step3Page() {
  const router = useRouter();
  const { data, updateData, setCurrentStep } = useOnboarding();

  const isComplete =
    data.studyFrequency &&
    data.focusDuration &&
    data.incorrectAnswerResponse &&
    (data.learningMethods && data.learningMethods.length > 0);

  const handleNext = () => {
    if (!isComplete) return;
    setCurrentStep(4);
    router.push('/onboarding/step-4');
  };

  const handleBack = () => {
    setCurrentStep(2);
    router.push('/onboarding/step-2');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Learning Habits
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          This helps us personalize your AI coach.
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentStep={3} totalSteps={4} />

      {/* Questions */}
      <div className="space-y-6">
        {/* Q9: Study Frequency */}
        <MultiChoice
          label="Q9. How often do you currently study?"
          options={STUDY_FREQUENCIES}
          value={data.studyFrequency as StudyFrequency | undefined}
          onChange={(value) => updateData('studyFrequency', value as StudyFrequency)}
          required
        />

        {/* Q10: Focus Duration */}
        <MultiChoice
          label="Q10. How long can you usually focus before losing concentration?"
          options={FOCUS_DURATIONS}
          value={data.focusDuration as FocusDuration | undefined}
          onChange={(value) => updateData('focusDuration', value as FocusDuration)}
          required
        />

        {/* Q11: Incorrect Answer Response */}
        <MultiChoice
          label="Q11. When you get a question wrong, what do you usually do?"
          options={INCORRECT_RESPONSES}
          value={data.incorrectAnswerResponse as IncorrectAnswerResponse | undefined}
          onChange={(value) => updateData('incorrectAnswerResponse', value as IncorrectAnswerResponse)}
          required
        />

        {/* Q12: Learning Methods */}
        <Checkboxes
          label="Q12. What helps you learn best? (Select up to 2)"
          options={LEARNING_METHODS}
          value={(data.learningMethods || []) as LearningMethod[]}
          onChange={(values) => updateData('learningMethods', values as LearningMethod[])}
          maxSelect={2}
          required
        />
      </div>

      {/* Buttons */}
      <FormButtons
        onBack={handleBack}
        onNext={handleNext}
        isFirstStep={false}
        isLastStep={false}
        nextDisabled={!isComplete}
      />
    </div>
  );
}
