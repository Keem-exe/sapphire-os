/**
 * Onboarding Context
 * Manages state for multi-step onboarding flow
 */

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { OnboardingData, OnboardingDataPartial, OnboardingContextType } from '@/types/onboarding';

// Create context
const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

// Initial empty data
const initialData: OnboardingDataPartial = {
  name: '',
  formLevel: undefined,
  subjects: [],
  examTiming: undefined,
  mainGoal: undefined,
  worrySubject: undefined,
  confidenceMath: undefined,
  confidenceEnglish: undefined,
  targetGrade: undefined,
  studyFrequency: undefined,
  focusDuration: undefined,
  incorrectAnswerResponse: undefined,
  learningMethods: [],
  sapphireHelp: [],
  motivationType: undefined,
  competitionPreference: undefined,
};

/**
 * OnboardingProvider - Wraps the onboarding flow with state management
 */
export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingDataPartial>(initialData);
  const [currentStep, setCurrentStep] = useState(1);

  const updateData = (key: keyof OnboardingData, value: any) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetOnboarding = () => {
    setData(initialData);
    setCurrentStep(1);
  };

  const value: OnboardingContextType = {
    data,
    currentStep,
    updateData,
    setCurrentStep,
    resetOnboarding,
  };

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

/**
 * useOnboarding - Hook to access onboarding context
 * @throws Error if used outside OnboardingProvider
 */
export function useOnboarding(): OnboardingContextType {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
}
