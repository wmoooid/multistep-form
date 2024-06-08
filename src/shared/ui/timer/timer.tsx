import React from 'react';

import styles from './timer.module.css';

export interface TimerProps extends React.HTMLAttributes<HTMLDivElement> {
  time: number;
}

const timeHelper = new Intl.DateTimeFormat('ru-RU', { minute: 'numeric', second: 'numeric' });

export const Timer = React.forwardRef<HTMLDivElement, TimerProps>(({ time, ...props }, forwardRef) => {
  const formatTime = timeHelper.format(time);
  const isTimeUp = time === 0;

  return (
    <div
      ref={forwardRef}
      className={styles.wrapper}
      {...props}>
      <span className={styles.text}>{isTimeUp ? 'Время вышло' : formatTime}</span>
    </div>
  );
});
