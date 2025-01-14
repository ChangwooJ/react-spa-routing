import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleDarkmode = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemProvider, ThemeContext };
