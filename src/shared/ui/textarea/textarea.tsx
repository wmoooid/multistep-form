import React from 'react';

import styles from './textarea.module.css';

interface TextInputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value: string;
  onValueChange: (value: string) => void;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextInputProps>(({ name, value, onValueChange, ...props }, forwardRef) => {
  return (
    <textarea
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      name={name}
      className={styles.input}
      ref={forwardRef}
      {...props}
    />
  );
});
