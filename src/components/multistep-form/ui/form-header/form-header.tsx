import { StepProgress } from '@/shared/ui/step-progress';
import styles from './form-header.module.css';

export const FormHeader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Тестирование</h1>
            </div>
            <StepProgress stepsLength={4} currentStep={0} />
        </div>
    );
};
