import { useThemContext } from "../../context/ThemContextProvider";

export default function Buttons({ label, onClick, selectedBut }) {
  const { isDarkMode } = useThemContext();
  console.log(selectedBut);
  return (
    <button
      onClick={onClick}
      className={`
  border border-[#4D5163] rounded-2xl p-2
  ${
    isDarkMode
      ? "text-white hover:bg-red-500 hover:text-black hover:border-transparent"
      : "text-black hover:bg-red-500 hover:text-white border-gray-800 hover:border-transparent"
  }
  ${selectedBut ? "bg-red-500" : "bg-transparent"}
`}
    >
      {label}
    </button>
  );
}
