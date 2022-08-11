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
      'border-dartmouth-green text-dartmouth-green',
      'hover:text-pastel-green hover:border-pastel-green transition-all',
      className
    )}
  >
    {children}
  </span>
);

export default Button;
