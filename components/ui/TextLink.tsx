import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

const TextLink: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => (
  <span
    className={classNames(
      'text-dartmouth-green border-b border-b-transparent transition-all hover:border-b-dartmouth-green',
      className
    )}
  >
    {children}
  </span>
);

export default TextLink;
