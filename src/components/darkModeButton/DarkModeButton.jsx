import { useThemContext } from "../../context/ThemContextProvider";
export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useThemContext();

  return (
    <button
      className={`border-red-400 rounded-lg p-2 ${
        isDarkMode
          ? "bg-gray-800 hover:bg-gray-500"
          : "bg-gray-100 hover:bg-gray-300"
      }`}
      onClick={toggleDarkMode}
    >
      <img
        src={isDarkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
        alt="Toggle Dark Mode"
      />
    </button>
  );
}
