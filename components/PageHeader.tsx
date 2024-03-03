import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LocaleSwitcher from './LocaleSwitcher';
import RecentTracksDisplay from './RecentTracksDisplay';

const PageHeader: FC = () => {
  const { t } = useTranslation();

  return (
    <header className='w-full flex justify-between items-center flex-col my-2 grow'>
      <div className='w-full flex justify-between items-center'>
        <div className='grow-1 basis-[33%]'>
          <DarkModeToggle />
        </div>
        <div className='grow-1 basis-[33%] max-w-[50%]'>
          <RecentTracksDisplay />
        </div>
        <div className='grow-1 basis-[33%]'>{/* <LocaleSwitcher /> */}</div>
      </div>
      <div className='mt-4'>
        <motion.h1
          layout
          layoutId='title'
          initial={{ opacity: 0, transform: 'translateY(-50%)' }}
          animate={{ opacity: 1, transform: 'translateY(0%)' }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className='text-4xl text-center'
        >
          This site has moved.{' '}
          <a href='https://chikorito.land' className='text-blue-700 underline'>
            Visit chikorito.land
          </a>
        </motion.h1>
      </div>
      <div />
    </header>
  );
};

export default PageHeader;
