import { createContext, useContext, useState } from "react";

const ThemContext = createContext();

// the provider component
function ThemContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <ThemContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemContext.Provider>
  );
}

// custom hook to use the ThemContext
function useThemContext() {
  if (!ThemContext) {
    throw new Error("useThemContext must be used within a ThemContextProvider");
  }

  return useContext(ThemContext);
}

export { ThemContextProvider, useThemContext };
