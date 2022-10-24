import { FC, PropsWithChildren } from 'react';

const TextTitleStyle: FC<PropsWithChildren> = ({ children }) => {
  return <div className='text-4xl text-accent mt-2'>{children}</div>;
};

export default TextTitleStyle;
