import FunctionContextComponent from "./FunctionContextComponent";
import ThemeProvider from "./ThemeContext";

const UseContextApp = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
};

export default UseContextApp;
