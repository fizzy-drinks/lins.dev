import { motion } from 'framer-motion';
import { FC } from 'react';
import useRouterLoading from 'hooks/useRouterLoading';

const LoaderBar: FC = () => {
  const loading = useRouterLoading();

  return (
    <motion.aside
      variants={{
        start: {
          width: '1px',
          opacity: 1,
        },
        loading: {
          width: ['0.5%', '30%', '70%', '100%'],
          opacity: 1,
          transition: {
            times: [0, 0.02, 0.1, 1],
            duration: 120,
            opacity: {
              duration: 0,
            },
          },
        },
        rest: {
          width: '100%',
          opacity: 0,
          transition: {
            duration: 0.5,
            opacity: {
              duration: 2,
              delay: 0.5,
            },
          },
        },
      }}
      initial='start'
      animate={loading ? 'loading' : 'rest'}
      className='block border-b-2 border-b-accent fixed top-0 left-0'
    />
  );
};

export default LoaderBar;
