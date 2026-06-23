/**
 * Onboarding Step 1: About You
 * Questions 1-4: Name, Grade/Form, Subjects, Exam Timing
 */

'use client';

import { useRouter } from 'next/navigation';
import {
  TextInput,
  MultiChoice,
  Checkboxes,
  StepIndicator,
  FormButtons,
} from '@/components/onboarding/FormComponents';
import { useOnboarding } from '@/lib/onboarding-context';
import { FormLevel, CSECSubject } from '@/types/onboarding';

const FORM_LEVELS: FormLevel[] = [
  'Form 1',
  'Form 2',
  'Form 3',
  'Form 4',
  'Form 5',
  'Upper 6',
  'Lower 6',
];

const CSEC_SUBJECTS: CSECSubject[] = ['Mathematics', 'English Language'];

const EXAM_TIMINGS = ['This year', 'Next year', 'More than a year away', 'Not sure'] as const;

export default function Step1Page() {
  const router = useRouter();
  const { data, updateData, setCurrentStep } = useOnboarding();

  const isComplete =
    data.name?.trim() &&
    data.formLevel &&
    (data.subjects && data.subjects.length > 0) &&
    data.examTiming;

  const handleNext = () => {
    if (!isComplete) return;
    setCurrentStep(2);
    router.push('/onboarding/step-2');
  };

  const handleBack = () => {
    // Redirect to signup or home
    router.push('/auth/signup');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome to Sapphire OS
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Let's create your personalized learning path.
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentStep={1} totalSteps={4} />

      {/* Questions */}
      <div className="space-y-6">
        {/* Q1: Name */}
        <TextInput
          label="Q1. What is your name?"
          placeholder="Enter your full name"
          value={data.name || ''}
          onChange={(value) => updateData('name', value)}
          required
        />

        {/* Q2: Grade/Form */}
        <MultiChoice
          label="Q2. What grade/form are you currently in?"
          options={FORM_LEVELS}
          value={data.formLevel as FormLevel | undefined}
          onChange={(value) => updateData('formLevel', value as FormLevel)}
          required
        />

        {/* Q3: Subjects */}
        <Checkboxes
          label="Q3. Which CSEC subjects would you like help with?"
          options={CSEC_SUBJECTS}
          value={(data.subjects || []) as CSECSubject[]}
          onChange={(values) => updateData('subjects', values as CSECSubject[])}
          required
        />

        {/* Q4: Exam Timing */}
        <MultiChoice
          label="Q4. When are you writing your CSEC exams?"
          options={EXAM_TIMINGS as unknown as string[]}
          value={data.examTiming as string | undefined}
          onChange={(value) => updateData('examTiming', value)}
          required
        />
      </div>

      {/* Buttons */}
      <FormButtons
        onBack={handleBack}
        onNext={handleNext}
        isFirstStep={true}
        isLastStep={false}
        nextDisabled={!isComplete}
      />
    </div>
  );
}
