/**
 * Onboarding Step 2: Goals & Motivation
 * Questions 5-8: Main Goal, Worry Subject, Confidence Scale (Math & English), Target Grade
 */

'use client';

import { useRouter } from 'next/navigation';
import {
  MultiChoice,
  ConfidenceScale,
  StepIndicator,
  FormButtons,
} from '@/components/onboarding/FormComponents';
import { useOnboarding } from '@/lib/onboarding-context';
import { UserGoal, TargetGrade, ConfidenceLevel } from '@/types/onboarding';

const USER_GOALS: UserGoal[] = [
  'Pass CSEC',
  'Improve grades',
  'Get a Grade I',
  'Prepare for school exams',
  'Build confidence',
  'Improve weak areas',
];

const WORRY_SUBJECTS = ['Mathematics', 'English Language', 'Neither'] as const;

const TARGET_GRADES: TargetGrade[] = [
  'Grade I',
  'Grade II',
  'Grade III',
  'Just want to pass',
];

export default function Step2Page() {
  const router = useRouter();
  const { data, updateData, setCurrentStep } = useOnboarding();

  const isComplete =
    data.mainGoal &&
    data.worrySubject &&
    data.confidenceMath &&
    data.confidenceEnglish &&
    data.targetGrade;

  const handleNext = () => {
    if (!isComplete) return;
    setCurrentStep(3);
    router.push('/onboarding/step-3');
  };

  const handleBack = () => {
    setCurrentStep(1);
    router.push('/onboarding/step-1');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Goals & Motivation
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Let us understand your learning objectives.
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentStep={2} totalSteps={4} />

      {/* Questions */}
      <div className="space-y-6">
        {/* Q5: Main Goal */}
        <MultiChoice
          label="Q5. What is your main goal?"
          options={USER_GOALS}
          value={data.mainGoal as UserGoal | undefined}
          onChange={(value) => updateData('mainGoal', value as UserGoal)}
          required
        />

        {/* Q6: Worry Subject */}
        <MultiChoice
          label="Q6. Which subject worries you the most?"
          options={WORRY_SUBJECTS as unknown as string[]}
          value={data.worrySubject as string | undefined}
          onChange={(value) => updateData('worrySubject', value)}
          required
        />

        {/* Q7: Confidence Scale */}
        <div className="space-y-6">
          <ConfidenceScale
            label="Q7. How confident do you currently feel?"
            subjectLabel="Mathematics"
            value={data.confidenceMath as ConfidenceLevel | undefined}
            onChange={(value) => updateData('confidenceMath', value as ConfidenceLevel)}
            required
          />

          <ConfidenceScale
            label="Q7. How confident do you currently feel?"
            subjectLabel="English Language"
            value={data.confidenceEnglish as ConfidenceLevel | undefined}
            onChange={(value) => updateData('confidenceEnglish', value as ConfidenceLevel)}
            required
          />
        </div>

        {/* Q8: Target Grade */}
        <MultiChoice
          label="Q8. What grade are you aiming for?"
          options={TARGET_GRADES}
          value={data.targetGrade as TargetGrade | undefined}
          onChange={(value) => updateData('targetGrade', value as TargetGrade)}
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
