import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { decrementTimer, saveFormState, submitForm } from '../../model/multistep-form-slice';
import { FormBody } from '../form-body/form-body';
import { FormFooter } from '../form-footer/form-footer';
import { FormHeader } from '../form-header/form-header';
import styles from './multistep-form.module.css';

export const MultistepForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      dispatch(decrementTimer());
    }, 1000);

    const handleBeforeUnload = () => dispatch(saveFormState());
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(timerInterval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(submitForm());
  };

  return (
    <section className={styles.wrapper}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}>
        <FormHeader />
        <FormBody />
        <FormFooter />
      </form>
    </section>
  );
};
