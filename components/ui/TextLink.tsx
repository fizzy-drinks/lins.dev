import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

const TextLink: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => (
  <span
    className={classNames(
      'text-green-700 border-b border-b-green-700/0 transition-all hover:border-b-green-700',
      className
    )}
  >
    {children}
  </span>
);

export default TextLink;
