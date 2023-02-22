import { useTheme } from "./ThemeContext";

const FunctionContextComponent = () => {
  const { useDarkTheme, toggleTheme } = useTheme();

  const themeStyles = {
    backgroundColor: useDarkTheme ? "#333" : "#CCC",
    color: useDarkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>FunctionContextComponent</div>
    </>
  );
};

export default FunctionContextComponent;
