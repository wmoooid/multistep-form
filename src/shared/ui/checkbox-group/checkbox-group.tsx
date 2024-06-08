import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import React, { useId } from 'react';

import styles from './checkbox-group.module.css';

interface CheckboxGroupProps {
  name: string;
  fields: string[];
  value: string;
  onValueChange: (value: string) => void;
}

interface CheckboxProps {
  name: string;
  value: string;
  checked: boolean;
  onCheckedChange: (value: string, checked: CheckboxPrimitive.CheckedState) => void;
}

const SPLIT_PATTERN = ',\n';

export const CheckboxGroup = React.forwardRef<HTMLUListElement, CheckboxGroupProps>(({ name, fields, value, onValueChange }, forwardRef) => {
  const valuesSet = new Set(value?.length ? value.split(SPLIT_PATTERN) : []);

  const onCheckedChange: CheckboxProps['onCheckedChange'] = (value, checked) => {
    checked ? valuesSet.add(value) : valuesSet.delete(value);
    const newValue = Array.from(valuesSet).join(SPLIT_PATTERN);
    onValueChange(newValue);
  };

  return (
    <ul
      className={styles.wrapper}
      ref={forwardRef}>
      {fields.map((value, index) => (
        <Checkbox
          key={value + index}
          value={value}
          name={name}
          checked={valuesSet.has(value)}
          onCheckedChange={onCheckedChange}
        />
      ))}
    </ul>
  );
});

const Checkbox: React.FC<CheckboxProps> = ({ name, value, checked, onCheckedChange }) => {
  const id = useId();

  return (
    <li className={styles.value_wrapper}>
      <CheckboxPrimitive.Root
        className={styles.root}
        name={name}
        value={value}
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(value, checked)}
        id={id}>
        <CheckboxPrimitive.Indicator className={styles.indicator}>
          <CheckIcon style={{ width: '1rem', height: '1rem' }} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        className={styles.label}
        htmlFor={id}>
        {value}
      </label>
    </li>
  );
};
