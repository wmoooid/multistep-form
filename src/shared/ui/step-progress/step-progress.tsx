import React from 'react';

import styles from './step-progress.module.css';

interface StepProgressListProps extends React.HTMLAttributes<HTMLOListElement> {
  stepsLength: number;
  currentStep?: number;
}

interface StepProgressItemProps {
  isActive?: boolean;
}

export const StepProgress = React.forwardRef<HTMLOListElement, StepProgressListProps>(
  ({ stepsLength = 0, currentStep = 0, ...props }, forwardRef) => {
    return (
      <ol
        className={styles.list}
        ref={forwardRef}
        {...props}>
        {Array.from({ length: stepsLength }).map((_, index) => (
          <StepProgressItem
            key={index}
            isActive={currentStep === index}
          />
        ))}
      </ol>
    );
  }
);

const StepProgressItem: React.FC<StepProgressItemProps> = ({ isActive = false, ...props }) => {
  return (
    <li
      className={styles.item}
      {...props}>
      <button
        type="button"
        className={styles.element}
        data-state={isActive ? 'active' : ''}></button>
    </li>
  );
};
