import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

const TextBlock: FC<
  PropsWithChildren<{
    variant: 'h1' | 'h2' | 'synopsis' | 'paragraph';
    className?: string;
  }>
> = ({ variant, className, children }) => (
  <span
    className={classNames(
      'block max-w-4xl',
      {
        'text-3xl font-semibold mb-2': variant === 'h1',
        'text-2xl font-semibold mb-2': variant === 'h2',
        'text-xl mb-1': variant === 'synopsis',
        'mb-1': variant === 'paragraph',
      },
      className
    )}
  >
    {children}
  </span>
);

export default TextBlock;
