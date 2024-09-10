import cx from 'clsx';
import { HTMLAttributes } from 'react';

import styles from './Flex.module.css';

export const DirectionVariant = {
  row: 'row',
  column: 'column',
} as const;

type FlexProps = {
  direction?: keyof typeof DirectionVariant;
  columnGap?: number;
  rowGap?: number;
  wrap?: boolean;
  justify?: React.CSSProperties['justifyContent'];
} & HTMLAttributes<HTMLElement>;

export const Flex = ({
  direction = 'row',
  columnGap,
  rowGap,
  wrap,
  justify,
  className,
  style,
  children,
}: FlexProps) => {
  return (
    <div
      className={cx(styles.flex, className)}
      style={{
        ...{
          '--flex-column-gap': columnGap ? `${columnGap}px` : 0,
          '--flex-row-gap': rowGap ? `${rowGap}px` : 0,
          '--flex-wrap': wrap ? `${wrap}` : null,
          '--flex-justify-content': justify ? `${justify}` : null,
          '--flex-direction': direction ? `${direction}` : null,
        },
        ...style,
      }}
    >
      {children}
    </div>
  );
};
