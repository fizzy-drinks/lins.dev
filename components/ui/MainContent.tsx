import { clsx } from 'clsx';
import { motion, MotionProps } from 'framer-motion';
import { FC, HTMLAttributes } from 'react';

const MainContent: FC<MotionProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      variants={{ out: { opacity: 0 }, in: { opacity: 1 } }}
      initial='out'
      animate='in'
      exit='out'
      transition={{ delay: 0.5, duration: 1 }}
      {...props}
      className={clsx(
        props.className,
        'max-w-[460px] grow h-full flex flex-col justify-around'
      )}
    >
      {children}
      <div />
    </motion.div>
  );
};

export default MainContent;
