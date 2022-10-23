import { clsx } from 'clsx';
import { motion, MotionProps } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, HTMLAttributes, useEffect, useState } from 'react';

const MainContent: FC<MotionProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
  }, [router]);

  return (
    <motion.div
      variants={{
        initial: { opacity: 0 },
        in: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
        out: { opacity: 0, transition: { duration: 0.4 } },
      }}
      initial='initial'
      animate={loading ? 'out' : 'in'}
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
