import { useDispatch } from 'react-redux';

import { submitForm } from '../../model/multistep-form-slice';
import { FormBody } from '../form-body/form-body';
import { FormFooter } from '../form-footer/form-footer';
import { FormHeader } from '../form-header/form-header';
import styles from './multistep-form.module.css';

export const MultistepForm = () => {
  const dispatch = useDispatch();

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
