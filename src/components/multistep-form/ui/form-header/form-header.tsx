import styles from './form-header.module.css';

export const FormHeader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Тестирование</h1>
            </div>
        </div>
    );
};
