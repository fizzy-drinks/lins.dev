import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='container mx-auto p-1 flex flex-col items-center justify-around h-full gap-3 lowercase'>
      {children}
    </div>
  );
};

export default PageContainer;
