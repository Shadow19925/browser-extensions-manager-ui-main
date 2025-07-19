import DarkModeButton from "../darkModeButton/DarkModeButton";
import { useThemContext } from "../../context/ThemContextProvider";
export default function Header() {
  const { isDarkMode } = useThemContext();
  return (
    <header
      className={`flex justify-between p-4 ${
        isDarkMode
          ? `bg-gradient-to-r from-[#3e435e] to-[#2d3149] `
          : `bg-white `
      }  rounded-3xl `}
    >
      <img src="images/logo.svg" alt="Logo" className="h-15 w-15" />

      <DarkModeButton />
    </header>
  );
}
