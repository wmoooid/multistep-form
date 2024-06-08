import React from 'react';

import styles from './input.module.css';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type: 'text' | 'number';
  name: string;
  value: string;
  onValueChange: (value: string) => void;
}

export const Input = React.forwardRef<HTMLInputElement, TextInputProps>(({ type, name, value, onValueChange, ...props }, forwardRef) => {
  return (
    <input
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      name={name}
      className={styles.input}
      type={type}
      ref={forwardRef}
      {...props}
    />
  );
});
