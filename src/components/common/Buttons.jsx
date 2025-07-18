import { useThemContext } from "../../context/ThemContextProvider";

export default function Buttons({ label, onClick, selectBut }) {
  const { isDarkMode } = useThemContext();

  return (
    <button
      onClick={onClick}
      className={`bg-transparent border border-[#4D5163] rounded-2xl p-2 ${
        selectBut ? "bg-red-500" : ""
      } ${
        isDarkMode
          ? "text-white hover:bg-red-500 hover:text-black hover:border-transparent"
          : "text-black hover:bg-red-500 hover:text-white border-gray-800 hover:border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
