/**
 * Onboarding Form Components
 * Reusable UI components for the onboarding flow
 */

'use client';

interface TextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function TextInput({
  label,
  placeholder,
  value,
  onChange,
  required = false,
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

interface MultiChoiceProps {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function MultiChoice({
  label,
  options,
  value,
  onChange,
  required = false,
}: MultiChoiceProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
              value === option
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:border-blue-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

interface CheckboxesProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (values: string[]) => void;
  maxSelect?: number;
  required?: boolean;
}

export function Checkboxes({
  label,
  options,
  value,
  onChange,
  maxSelect,
  required = false,
}: CheckboxesProps) {
  const handleChange = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      if (maxSelect !== undefined && value.length >= maxSelect) {
        return; // Don't add if max reached
      }
      onChange([...value, option]);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {maxSelect && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {value.length}/{maxSelect}
          </span>
        )}
      </div>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleChange(option)}
            disabled={
              maxSelect !== undefined && value.length >= maxSelect && !value.includes(option)
            }
            className={`w-full p-3 text-left rounded-lg border-2 transition-all flex items-center gap-3 ${
              value.includes(option)
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-300'
            } ${
              maxSelect !== undefined && value.length >= maxSelect && !value.includes(option)
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            <div
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                value.includes(option)
                  ? 'bg-blue-500 border-blue-500'
                  : 'border-gray-400 dark:border-gray-500'
              }`}
            >
              {value.includes(option) && <span className="text-white text-sm">✓</span>}
            </div>
            <span className="text-gray-900 dark:text-white">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

interface ConfidenceScaleProps {
  label: string;
  subjectLabel: string;
  value?: number;
  onChange: (value: number) => void;
  required?: boolean;
}

export function ConfidenceScale({
  label,
  subjectLabel,
  value = 3,
  onChange,
  required = false,
}: ConfidenceScaleProps) {
  const levels = [1, 2, 3, 4, 5];
  const descriptions = [
    'Not confident at all',
    'Slightly confident',
    'Neutral',
    'Confident',
    'Extremely confident',
  ];

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-900 dark:text-white">
        {label} - {subjectLabel}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="space-y-3">
        <div className="flex gap-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => onChange(level)}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                value === level
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          {descriptions[value - 1]}
        </p>
      </div>
    </div>
  );
}

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const stepTitles = ['About You', 'Goals & Motivation', 'Learning Habits', 'Personalization'];

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-gray-600 dark:text-gray-400">{stepTitles[currentStep - 1]}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-all ${
              index < currentStep
                ? 'bg-blue-500'
                : index === currentStep - 1
                  ? 'bg-blue-300'
                  : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

interface FormButtonsProps {
  onBack: () => void;
  onNext: () => void;
  onSubmit?: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
  isLoading?: boolean;
  nextDisabled?: boolean;
}

export function FormButtons({
  onBack,
  onNext,
  onSubmit,
  isLastStep,
  isFirstStep,
  isLoading = false,
  nextDisabled = false,
}: FormButtonsProps) {
  return (
    <div className="flex gap-3 mt-8">
      {!isFirstStep && (
        <button
          onClick={onBack}
          disabled={isLoading}
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          Back
        </button>
      )}
      <button
        onClick={isLastStep && onSubmit ? onSubmit : onNext}
        disabled={isLoading || nextDisabled}
        className="flex-1 px-4 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Loading...
          </span>
        ) : isLastStep ? (
          'Complete Profile'
        ) : (
          'Next'
        )}
      </button>
    </div>
  );
}
