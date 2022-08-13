import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

const SiteSection: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => (
  <div className={classNames('block my-2', className)}>{children}</div>
);

export default SiteSection;
