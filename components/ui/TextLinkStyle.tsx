import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';

const TextLinkStyle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span
      className={clsx(
        'transition-all ease-in-out duration-300',
        'dark:hover:text-highlight-dark hover:text-highlight  text-accent',
        'border-b border-b-accent hover:border-b-transparent'
      )}
    >
      {children}
    </span>
  );
};

export default TextLinkStyle;
