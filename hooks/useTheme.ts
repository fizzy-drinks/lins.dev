import { useContext } from 'react';
import { Theme, ThemeContext } from 'components/ThemeProvider';

const useTheme = (): Theme => {
  return useContext(ThemeContext);
};

export default useTheme;
