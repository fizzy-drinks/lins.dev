import { motion, MotionProps } from 'framer-motion';
import { FC, HTMLAttributes } from 'react';

const AnimateIn: FC<MotionProps & HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 1 },
      }}
      {...props}
    />
  );
};

export default AnimateIn;
