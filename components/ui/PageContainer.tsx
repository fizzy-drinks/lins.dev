import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';
import useTheme from 'hooks/useTheme';

const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={clsx(
        'mx-auto px-3 flex flex-col items-center w-full h-full gap-3 lowercase dark:bg-gray-900 dark:text-gray-200',
        darkMode && 'dark'
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
