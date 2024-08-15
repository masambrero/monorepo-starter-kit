import cx from 'clsx';
import { HTMLAttributes } from 'react';

import classes from './Typography.module.css';

export const Elements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  a: 'a',
  span: 'span',
  li: 'li',
  div: 'div',
} as const;

type TextProps = {
  className?: string;
  align?: 'left' | 'right' | 'center';
  inline?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
} & HTMLAttributes<'p'>;

export const Typography = ({
  children,
  className,
  as,
  align,
  inline,
  ...props
}: TextProps) => {
  const TextElement = as ?? Elements.p;

  return (
    <TextElement
      className={cx(
        classes.text,
        align && classes[`text_${align}`],
        inline && classes.text_inline,
        className
      )}
      {...props}
    >
      {children}
    </TextElement>
  );
};
