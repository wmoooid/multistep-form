import { Question } from '@/shared/types/question';
import { TimerProps } from '@/shared/ui/timer/timer';

export interface FormState {
  questions: Question[];
  answers: string[];
  currentStep: number;
  stepsLength: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  shouldDisableNext: boolean;
  timer: TimerProps['time'];
}
