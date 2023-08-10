import React, { Children } from 'react';
import styles from './List.module.scss';

export type ListProps = {
  direction?: 'column' | 'row';
  wrap?: 'wrap' | 'nowrap';
  children: React.ReactNode;
};

export const List: React.FC<ListProps> = ({
  direction = 'column',
  wrap = 'wrap',
  children,
}) => {
  return (
    <ul
      className={styles.list}
      style={
        {
          '--direction': direction,
          '--wrap': wrap,
        } as React.CSSProperties
      }
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child) && child.key) {
          return <li key={child.key}>{child}</li>;
        }
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
};
