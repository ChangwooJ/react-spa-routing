import { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../theme/theme';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initTheme =
    localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(initTheme ? initTheme : null);

  const toggleDarkmode = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;

    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );

    localStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
