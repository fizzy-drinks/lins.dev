import { FC, PropsWithChildren } from 'react';
import LoaderBar from './LoaderBar';
import MainContent from './MainContent';
import PageHeader from 'components/PageHeader';

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LoaderBar />
      <div className='mx-auto px-3 flex flex-col items-center w-full h-full gap-3 lowercase dark:bg-neutral-900 dark:text-gray-200'>
        <PageHeader />
        {children && <MainContent>{children}</MainContent>}
      </div>
    </>
  );
};

export default PageLayout;
