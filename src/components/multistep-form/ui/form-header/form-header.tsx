import { useSelector } from 'react-redux';

import { RootState } from '@/app/store/config/store';
import { StepProgress } from '@/shared/ui/step-progress';
import { Timer } from '@/shared/ui/timer';

import styles from './form-header.module.css';

export const FormHeader = () => {
  const stepsLength = useSelector((state: RootState) => state.multistepForm.stepsLength);
  const currentStep = useSelector((state: RootState) => state.multistepForm.currentStep);

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Тестирование</h1>
        <FormHeaderTimer />
      </div>
      <StepProgress
        stepsLength={stepsLength}
        currentStep={currentStep}
      />
    </div>
  );
};

const FormHeaderTimer = () => {
  const timer = useSelector((state: RootState) => state.multistepForm.timer);

  return <Timer time={timer} />;
};
