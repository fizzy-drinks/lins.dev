import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import useTheme from 'hooks/useTheme';

const DarkModeToggle: FC = () => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      type='button'
      aria-label={t('ui.dark-mode')}
      onClick={toggleDarkMode}
    >
      <span
        className={clsx(
          'text-xs flex whitespace-nowrap rounded-full w-10 items-center h-1 transition-all duration-300',
          darkMode ? 'justify-start bg-yellow-300' : 'justify-end bg-gray-900'
        )}
      >
        <motion.span
          layoutId='mode-toggle'
          transition={{ duration: 0.3 }}
          className={clsx(
            'rounded-full inline-flex items-center justify-center',
            !darkMode ? 'bg-white' : 'bg-gray-900'
          )}
        >
          ☀
        </motion.span>
      </span>
    </button>
  );
};

export default DarkModeToggle;
