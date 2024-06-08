import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/store/config/store';
import { InputTypes } from '@/shared/consts/input-types';
import { Question } from '@/shared/types/question';
import { CheckboxGroup } from '@/shared/ui/checkbox-group';
import { Input } from '@/shared/ui/input';
import { RadioGroup } from '@/shared/ui/radio-group';
import { Textarea } from '@/shared/ui/textarea';

import { setValue } from '../../model/multistep-form-slice';
import styles from './form-body.module.css';

type FormStepProps = {
  isActive: boolean;
  fields?: string[];
  value: string;
  onValueChange: (value: string) => void;
} & Question;

export const FormBody: React.FC = () => {
  const questions = useSelector((state: RootState) => state.multistepForm.questions);
  const answers = useSelector((state: RootState) => state.multistepForm.answers);
  const currentStep = useSelector((state: RootState) => state.multistepForm.currentStep);

  const dispatch = useDispatch();
  const onValueChange = (index: number) => (value: string) => dispatch(setValue({ index, value }));

  return (
    <ul className={styles.list}>
      {questions.map((question, index) => (
        <FormStep
          key={index}
          isActive={currentStep === index}
          value={answers[index]}
          onValueChange={onValueChange(index)}
          {...question}
        />
      ))}
    </ul>
  );
};

const FormStep: React.FC<FormStepProps> = ({ isActive, title, type, fields, value, onValueChange }) => {
  return (
    <li
      className={styles.item}
      data-state={isActive ? 'active' : ''}>
      <p className={styles.text}>{title}</p>
      <>
        {type === InputTypes.TEXT && (
          <Input
            name={title}
            type={InputTypes.TEXT}
            placeholder="Введите ответ"
            value={value}
            onValueChange={onValueChange}
          />
        )}
        {type === InputTypes.TEXTAREA && (
          <Textarea
            name={title}
            type={InputTypes.TEXTAREA}
            placeholder="Введите ответ"
            value={value}
            onValueChange={onValueChange}
          />
        )}
        {type === InputTypes.RADIO && (
          <RadioGroup
            name={title}
            fields={fields}
            value={value}
            onValueChange={onValueChange}
          />
        )}
        {type === InputTypes.CHECKBOX && (
          <CheckboxGroup
            name={title}
            fields={fields}
            value={value}
            onValueChange={onValueChange}
          />
        )}
      </>
    </li>
  );
};
