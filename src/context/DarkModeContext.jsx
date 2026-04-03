import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
//1)create context
const DarkModeContext = createContext();
//2)create the provider
function DarkModeProvider({ children }) {
  //store the mode in the localStorage
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode",
  );
  //control the useState
  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  // manipulate the dom
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode],
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

//3)create the customHook

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("dark mode is been used outside the context");
  }
  return context;
}

export { DarkModeProvider, useDarkMode };
