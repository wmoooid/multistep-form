import styles from './final-screen.module.css';

interface FinalScreenProps {
  formData: { question: string; answer: string }[];
}

export const FinalScreen: React.FC<FinalScreenProps> = ({ formData }) => {
  if (!formData) return null;

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Тестирование завершено</h1>
      <p className={styles.text}>Ваши ответы:</p>
      <ul className={styles.list}>
        {formData.map((item, index) => (
          <li
            key={index}
            className={styles.item}>
            <strong>{item.question}</strong>
            <span>{item.answer}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
