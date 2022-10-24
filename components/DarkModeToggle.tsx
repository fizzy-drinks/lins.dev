import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import useTheme from 'hooks/useTheme';

const DarkModeToggle: FC = () => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      type='button'
      aria-label={t('ui.dark-mode')}
      onClick={toggleDarkMode}
      className='text-xs'
    >
      {darkMode ? '☀' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
