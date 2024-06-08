import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { QUESTIONS_LIST } from '@/shared/consts/default-questions';
import { LocalStorage } from '@/shared/consts/local-storage';

import { FormState } from '../types/form';

const localStorageData = localStorage.getItem(LocalStorage.FORM_STATE);
const parsedFormSate: FormState | null = localStorageData && JSON.parse(localStorageData);

const initialState: FormState = {
  questions: QUESTIONS_LIST,
  answers: Array(QUESTIONS_LIST.length).fill('') as string[],
  currentStep: 0,
  stepsLength: QUESTIONS_LIST.length,
  isFirstStep: true,
  isLastStep: false,
  shouldDisableNext: true,
  timer: 20 * 60 * 1000
};

const updateFormStateFlags = (state: FormState) => {
  state.isFirstStep = state.currentStep === 0;
  state.isLastStep = state.currentStep === state.questions.length - 1;
  state.shouldDisableNext = !state.answers[state.currentStep]?.length;
};

const saveToLocalStorage = (state: FormState) => {
  localStorage.setItem(LocalStorage.FORM_STATE, JSON.stringify(state));
  console.warn('Form state saved');
};

export const multistepFormSlice = createSlice({
  name: 'multistepForm',
  initialState: parsedFormSate ?? initialState,
  reducers: {
    setFormState: (state, action: PayloadAction<FormState>) => {
      state = action.payload;
      updateFormStateFlags(state);
      saveToLocalStorage(state);
    },

    submitForm: () => {
      localStorage.removeItem(LocalStorage.FORM_STATE);
    },

    setValue: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.answers[action.payload.index] = action.payload.value;
      updateFormStateFlags(state);
    },

    prevStep: (state) => {
      if (state.currentStep - 1 < 0) return;
      state.currentStep -= 1;
      updateFormStateFlags(state);
      saveToLocalStorage(state);
    },

    nextStep: (state) => {
      if (state.currentStep + 1 >= state.questions.length) return;
      state.currentStep += 1;
      updateFormStateFlags(state);
      saveToLocalStorage(state);
    }
  }
});

export const { setFormState, submitForm, setValue, prevStep, nextStep } = multistepFormSlice.actions;
export const multistepFormReducer = multistepFormSlice.reducer;
