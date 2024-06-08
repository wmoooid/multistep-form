import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import React, { FC, useId } from 'react';

import styles from './radio-group.module.css';

interface RadioGroupListProps {
  name: string;
  fields: string[];
  value: string;
  onValueChange: (value: string) => void;
}

interface RadioGroupItemProps {
  value: string;
}

export const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupListProps>(
  ({ name, fields, value, onValueChange }, forwardRef) => {
    return (
      <RadioGroupPrimitive.Root
        className={styles.root}
        name={name}
        ref={forwardRef}
        value={value}
        onValueChange={onValueChange}>
        {fields.map((value, index) => (
          <RadioGroupItem
            key={value + index}
            value={value}
          />
        ))}
      </RadioGroupPrimitive.Root>
    );
  }
);

const RadioGroupItem: FC<RadioGroupItemProps> = ({ value }) => {
  const id = useId();

  return (
    <div className={styles.value_wrapper}>
      <RadioGroupPrimitive.Item
        value={value}
        id={id}
        className={styles.item}>
        <RadioGroupPrimitive.Indicator className={styles.indicator} />
      </RadioGroupPrimitive.Item>
      <label
        className={styles.label}
        htmlFor={id}>
        {value}
      </label>
    </div>
  );
};
