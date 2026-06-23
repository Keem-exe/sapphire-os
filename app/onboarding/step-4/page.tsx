/**
 * Onboarding Step 4: Personalization
 * Questions 13-15: Sapphire Help Options, Motivation Type, Competition Preference
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
import { SapphireHelp, MotivationType, CompetitionPreference } from '@/types/onboarding';

const SAPPHIRE_HELP: SapphireHelp[] = [
  'Remind me to study',
  'Create a daily study plan',
  'Focus on weak areas',
  'Challenge me when I\'m doing well',
  'Explain mistakes',
  'Track my progress',
];

const MOTIVATION_TYPES: MotivationType[] = [
  'Seeing progress',
  'Earning XP',
  'Streaks',
  'Achievements',
  'Competition',
  'Improving grades',
];

const COMPETITION_OPTIONS: CompetitionPreference[] = ['Yes', 'Sometimes', 'No'];

export default function Step4Page() {
  const router = useRouter();
  const { data, updateData, setCurrentStep } = useOnboarding();

  const isComplete =
    (data.sapphireHelp && data.sapphireHelp.length > 0) &&
    data.motivationType &&
    data.competitionPreference;

  const handleNext = () => {
    if (!isComplete) return;
    setCurrentStep(5);
    router.push('/onboarding/summary');
  };

  const handleBack = () => {
    setCurrentStep(3);
    router.push('/onboarding/step-3');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Personalization
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Customize your Sapphire OS experience.
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentStep={4} totalSteps={4} />

      {/* Questions */}
      <div className="space-y-6">
        {/* Q13: Sapphire Help */}
        <Checkboxes
          label="Q13. How would you like Sapphire to help you?"
          options={SAPPHIRE_HELP}
          value={(data.sapphireHelp || []) as SapphireHelp[]}
          onChange={(values) => updateData('sapphireHelp', values as SapphireHelp[])}
          required
        />

        {/* Q14: Motivation Type */}
        <MultiChoice
          label="Q14. What motivates you most?"
          options={MOTIVATION_TYPES}
          value={data.motivationType as MotivationType | undefined}
          onChange={(value) => updateData('motivationType', value as MotivationType)}
          required
        />

        {/* Q15: Competition Preference */}
        <MultiChoice
          label="Q15. Do you enjoy competing with other students?"
          options={COMPETITION_OPTIONS}
          value={data.competitionPreference as CompetitionPreference | undefined}
          onChange={(value) => updateData('competitionPreference', value as CompetitionPreference)}
          required
        />
      </div>

      {/* Buttons */}
      <FormButtons
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleNext}
        isFirstStep={false}
        isLastStep={true}
        nextDisabled={!isComplete}
      />
    </div>
  );
}
