import React from 'react';

import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, forwardRef) => {
  return (
    <button
      className={styles.button}
      {...props}
      ref={forwardRef}>
      {children}
    </button>
  );
});
