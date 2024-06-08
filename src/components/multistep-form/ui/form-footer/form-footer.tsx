import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/store/config/store';
import { Button } from '@/shared/ui/button';

import { nextStep, prevStep } from '../../model/multistep-form-slice';
import styles from './form-footer.module.css';

export const FormFooter = () => {
  const isFirstStep = useSelector((state: RootState) => state.multistepForm.isFirstStep);
  const isLastStep = useSelector((state: RootState) => state.multistepForm.isLastStep);
  const shouldDisableNext = useSelector((state: RootState) => state.multistepForm.shouldDisableNext);

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <Button
        type="button"
        disabled={isFirstStep}
        onClick={() => dispatch(prevStep())}>
        <ArrowLeftIcon />
      </Button>
      {isLastStep ? (
        <Button
          key="submit"
          type="submit"
          disabled={shouldDisableNext}>
          Завершить
        </Button>
      ) : (
        <Button
          key="next"
          type="button"
          disabled={shouldDisableNext}
          onClick={() => dispatch(nextStep())}>
          Следующий шаг
        </Button>
      )}
    </div>
  );
};
