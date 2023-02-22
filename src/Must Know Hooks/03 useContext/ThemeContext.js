import { useState, createContext, useContext } from "react";

// two context, one for storing theme and one for updating theme
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

// custom hook to access context
export function useTheme() {
  return useContext(ThemeContext);
}

// custom hook to update context
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// it works like Layout component
const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      {/* ThemeUpdateContext will give function to child components to update theme */}
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
