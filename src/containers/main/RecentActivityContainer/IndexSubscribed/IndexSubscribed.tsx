import type { IndexSubscribedEvent } from '@superfluid-finance/sdk-core';
import React, { FC } from 'react';
import { getActivityCopying } from 'utils/getActivityCopying';
import { TransactionLink } from 'components/common/TransactionLink';
import { getTokenName } from 'utils/getTokenName';
import { TokenIcon } from 'components/common/TokenIcon';
import styles from '../styles.module.scss';

type IndexSubscribedProps = {
  event: IndexSubscribedEvent;
};

export const IndexSubscribed: FC<IndexSubscribedProps> = ({ event }) => {
  const {
    name, token, timestamp, subscriber, transactionHash,
  } = event;

  const tokenName = getTokenName(token);
  const time = new Date(timestamp * 1000).toString().split(' ')[4];

  const activityCopying = `${getActivityCopying(name)} in`;

  const subscriberCoying = `${subscriber.slice(0, 7)}...${subscriber.slice(-4)}`;

  /**
   * stop propagation of event to prevent rendering mobile activity details page.
   * 
   * @param e React.MouseEvent<HTMLDivElement>
   */
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={styles.larger_streaming_wrapper}>
        <div className={styles.larger_streaming_content}>
          <span>{time}</span>
          <span>
            {activityCopying}
          </span>
          <TokenIcon tokenName={tokenName} />
          <span className={styles.amount}>{tokenName}</span>
          <span>from</span>
          <span>{subscriberCoying}</span>
        </div>
        <div className={styles.transaction_link_wrapper} role="button" aria-hidden="true" onClick={stopPropagation}>
          <TransactionLink transactionHash={transactionHash} />
        </div>
      </div>
      <div className={styles.streaming_wrapper}>
        <div className={styles.streaming_content}>
          <span>{time}</span>
          <TokenIcon tokenName={tokenName} />
          <span className={styles.amount}>{tokenName}</span>
        </div>
        <div>
          <span>
            {`Subscribed to ${subscriberCoying}`}
          </span>
        </div>
      </div>
      <div className={styles.right_arrow}>
        <span>
          &gt;
        </span>
      </div>
    </>
  );
};