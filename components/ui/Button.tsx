import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

const Button: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => (
  <span
    className={classNames(
      'rounded border p-1 inline-block cursor-pointer',
      'border-green-700 text-green-700',
      'hover:text-green-500 hover:border-green-500 transition-all',
      className
    )}
  >
    {children}
  </span>
);

export default Button;
