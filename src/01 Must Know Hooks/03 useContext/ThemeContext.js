import { useState, createContext, useContext } from "react";

// Context for using and updating theme
const ThemeContext = createContext();

// custom hook to access & update context
export function useTheme() {
  return useContext(ThemeContext);
}

// it works like Layout component
const ThemeProvider = ({ children }) => {
  const [useDarkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ useDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
