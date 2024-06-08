import { FormBody } from '../form-body/form-body';
import { FormFooter } from '../form-footer/form-footer';
import { FormHeader } from '../form-header/form-header';
import styles from './multistep-form.module.css';

export const MultistepForm = () => {
    return (
        <section className={styles.wrapper}>
            <FormHeader />
            <FormBody />
            <FormFooter />
        </section>
    );
};
