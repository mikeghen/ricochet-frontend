import React, { ChangeEvent } from 'react';
import { Button } from 'components/common/Button';
import styles from './styles.module.scss';

type Props = {
  onStart: () => void;
  onStop: () => void;
  onSubscription: () => void;
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
  balance?: string;
  token: string;
  flowsOwned?: string;
  totalFlows?: number;
  value: string;
  error?: string;
  placeholder?: string;
};

export const FlowForm: React.FC<Props> = ({
  onStart, onStop, onSubscription, balance = '', token,
  totalFlows = '', flowsOwned = '',
  value, 
  onChange,
  error,
  placeholder = '-',
}) => (
  <>
    <div className={styles.balance}>
      {`Your Balance: ${balance} ${token}`}
    </div>
    <div className={styles.form}>
      <input
        type="number"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Button 
        label="Start/Edit"
        onClick={onStart}
        className={styles.button}
      />
      <Button
        label="Stop"
        className={styles.button}
        onClick={onStop}
      />
      <Button 
        label="Approve RIC"
        onClick={onSubscription}
        className={styles.button}
      />
    </div>
    <div className={styles.subscription}>
      {`${token}/month`}
    </div>
    {error && <p className={styles.error}>{error}</p>}
    <p className={styles.balance_text}>
      <span>Total Value Streaming:</span>
      <span className={styles.black}>{` ${flowsOwned} `}</span>
      <span>{`${token}/month`}</span>
    </p>
    <p className={styles.balance_text}>
      <span>Total Streams:</span>
      <span className={styles.black}>{` ${totalFlows}`}</span>
    </p>
  </>
);
