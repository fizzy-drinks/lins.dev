import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-auto p-1 flex flex-col items-center w-full h-full gap-3 lowercase'>
      {children}
    </div>
  );
};

export default PageContainer;
