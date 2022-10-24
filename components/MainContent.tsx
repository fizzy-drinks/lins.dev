import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import useRouterLoading from 'hooks/useRouterLoading';

const MainContent: FC<PropsWithChildren> = ({ children }) => {
  const loading = useRouterLoading();

  return (
    <motion.div
      variants={{
        initial: { opacity: 0 },
        in: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
        out: { opacity: 0, transition: { duration: 0.4 } },
      }}
      initial='initial'
      animate={loading ? 'out' : 'in'}
      className='max-w-[460px] grow h-full flex flex-col justify-around'
    >
      {children}
      <div />
    </motion.div>
  );
};

export default MainContent;
