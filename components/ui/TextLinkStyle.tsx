import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';

const TextLinkStyle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span
      className={clsx(
        'transition-all ease-in-out duration-300',
        'text-neutral-500 hover:text-red-500',
        'border-b border-b-neutral-500 hover:border-b-transparent'
      )}
    >
      {children}
    </span>
  );
};

export default TextLinkStyle;
