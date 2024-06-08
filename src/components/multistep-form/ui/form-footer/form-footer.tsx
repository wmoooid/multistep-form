import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { Button } from '@/shared/ui/button';

import styles from './form-footer.module.css';

export const FormFooter = () => {
  return (
    <div className={styles.wrapper}>
      <Button type="button">
        <ArrowLeftIcon />
      </Button>

      <Button
        key="next"
        type="button">
        Следующий шаг
      </Button>
    </div>
  );
};
