import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-auto px-3 flex flex-col items-center w-full h-full gap-3 lowercase dark:bg-gray-900 dark:text-gray-200'>
      {children}
    </div>
  );
};

export default PageContainer;
