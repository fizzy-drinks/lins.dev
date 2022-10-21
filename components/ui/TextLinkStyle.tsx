import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';

const TextLinkStyle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span
      className={clsx(
        'transition-all ease-in-out duration-300',
        'text-neutral-500 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-300',
        'border-b border-b-neutral-500 dark:border-b-yellow-200 hover:border-b-transparent'
      )}
    >
      {children}
    </span>
  );
};

export default TextLinkStyle;
