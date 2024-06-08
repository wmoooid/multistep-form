import styles from './header.module.css';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo_wrapper}>
            <span className={styles.logo_text}>Multistep form test</span>
          </div>
        </div>
      </div>
    </header>
  );
};
