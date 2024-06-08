import { Question } from '@/components/multistep-form/types/question';

import { InputTypes } from './input-types';

export const QUESTIONS_LIST: Question[] = [
  {
    title: 'Вы воспринимаете радугу как…',
    type: InputTypes.RADIO,
    fields: ['разноцветную ленту', 'шлейф богини', 'атмосферное явление', 'дорогу из блестящих камней', 'множество водяных капель (дождя или тумана)']
  },
  {
    title: 'К чему вы более восприимчивы?',
    type: InputTypes.RADIO,
    fields: ['к энергии', 'к воле', 'к обаянию', 'к уму', 'к фантазиям']
  },
  {
    title: 'Выберите небесное тело',
    type: InputTypes.RADIO,
    fields: ['Солнце', 'Марс', 'Юпитер', 'Венера', 'Сатурн']
  },
  {
    title: 'Каким драгоценным камнем вы могли бы быть?',
    type: InputTypes.CHECKBOX,
    fields: ['Изумрудом', 'Сапфиром', 'Рубином', 'Топазом', 'Яшма']
  },
  {
    title: 'Опишите что сейчас на вашем столе',
    type: InputTypes.TEXT
  },
  {
    title: 'Расскажите, что напоминает вам о детстве',
    type: InputTypes.TEXTAREA
  }
];
