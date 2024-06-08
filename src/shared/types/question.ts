import { InputTypes } from '@/shared/consts/input-types';

interface QuestionBase {
  title: string;
  type: string;
}

export interface SingleVariantQuestion extends QuestionBase {
  type: InputTypes.RADIO;
  fields: string[];
}

export interface MultipleVariantQuestion extends QuestionBase {
  type: InputTypes.CHECKBOX;
  fields: string[];
}

export interface ShortTextQuestion extends QuestionBase {
  type: InputTypes.TEXT;
}

export interface LongTextQuestion extends QuestionBase {
  type: InputTypes.TEXTAREA;
}

export type Question = SingleVariantQuestion | MultipleVariantQuestion | ShortTextQuestion | LongTextQuestion;
