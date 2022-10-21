import { clsx } from 'clsx';
import { createContext, FC, PropsWithChildren, useState } from 'react';
import { useCookies } from 'react-cookie';
import Twemoji from 'react-twemoji';

declare module 'react-twemoji' {
  interface TwemojiProps {
    id: string;
    className: string;
  }
}

export interface Theme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<Theme>({
  darkMode: false,
  toggleDarkMode: () => undefined,
});

const ThemeProvider: FC<PropsWithChildren<{ darkMode: boolean }>> = ({
  darkMode: isDarkDefault,
  children,
}) => {
  const [, setCookie] = useCookies();
  const [darkMode, setDarkMode] = useState(isDarkDefault);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setCookie('dark-mode', !darkMode, { path: '/' });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Twemoji id='twemoji' className={clsx(darkMode && 'dark')}>
        {children}
      </Twemoji>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
