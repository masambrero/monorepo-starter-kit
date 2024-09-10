import cx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './Grid.module.css';

type GridProps = {
  columns?: number;
  rows?: number;
  columnGap?: number;
  rowGap?: number;
} & HTMLAttributes<HTMLElement>;

export const Grid = ({
  children,
  columns,
  rows,
  columnGap,
  rowGap,
  className,
  style,
}: GridProps) => {
  return (
    <div
      className={cx(styles.grid, className)}
      style={{
        ...(columns !== undefined &&
          ({
            '--grid-template-columns': `repeat(${columns}, minmax(0, 1fr))`,
            '--grid-column-gap': `${columnGap}px`,
          } as React.CSSProperties)),
        ...(rows !== undefined &&
          ({
            '--grid-template-rows': `repeat(${rows}, minmax(0, 1fr))`,
            '--grid-row-gap': `${rowGap}px`,
          } as React.CSSProperties)),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
