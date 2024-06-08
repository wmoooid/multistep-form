import React from 'react';

import { CheckboxGroup } from '@/shared/ui/checkbox-group';
import { Input } from '@/shared/ui/input';
import { RadioGroup } from '@/shared/ui/radio-group';
import { Textarea } from '@/shared/ui/textarea';

import styles from './form-body.module.css';

export const QUESTIONS_LIST = [
  {
    title: 'Вы воспринимаете радугу как…',
    type: 'radio',
    fields: ['разноцветную ленту', 'шлейф богини', 'атмосферное явление', 'дорогу из блестящих камней', 'множество водяных капель (дождя или тумана)']
  },
  {
    title: 'К чему вы более восприимчивы?',
    type: 'radio',
    fields: ['к энергии', 'к воле', 'к обаянию', 'к уму', 'к фантазиям']
  },
  {
    title: 'Выберите небесное тело',
    type: 'radio',
    fields: ['Солнце', 'Марс', 'Юпитер', 'Венера', 'Сатурн']
  },
  {
    title: 'Каким драгоценным камнем вы могли бы быть?',
    type: 'checkbox',
    fields: ['Изумрудом', 'Сапфиром', 'Рубином', 'Топазом', 'Яшма']
  },
  {
    title: 'Опишите что сейчас на вашем столе',
    type: 'text'
  },
  {
    title: 'Расскажите, что напоминает вам о детстве',
    type: 'textarea'
  }
];

export const FormBody: React.FC = () => {
  return (
    <ul className={styles.list}>
      {QUESTIONS_LIST.map((question, index) => (
        <FormStep
          key={index}
          title={question.title}
          {...question}
        />
      ))}
    </ul>
  );
};

const FormStep: React.FC = ({ title, type, fields }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{title}</p>
      <>
        {type === 'text' && (
          <Input
            name={title}
            type={'text'}
            placeholder="Введите ответ"
          />
        )}
        {type === 'textarea' && (
          <Textarea
            name={title}
            type={'textarea'}
            placeholder="Введите ответ"
          />
        )}
        {type === 'radio' && (
          <RadioGroup
            name={title}
            fields={fields}
          />
        )}
        {type === 'checkbox' && (
          <CheckboxGroup
            name={title}
            fields={fields}
          />
        )}
      </>
    </li>
  );
};
