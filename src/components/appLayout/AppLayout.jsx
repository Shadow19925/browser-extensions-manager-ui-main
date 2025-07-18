import { useThemContext } from "../../context/ThemContextProvider";
import ExtCard from "../extCard/ExtCard";
import FilterBar from "../filterBar/FilterBar";
import Header from "../header/Header";
export default function AppLayout() {
  const { isDarkMode } = useThemContext();
  return (
    <div
      className={` h-screen  flex flex-col flex-wrap   overflow-y-auto ${
        isDarkMode
          ? "bg-gradient-to-b from-[#040918] to-[#091540]"
          : "bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9]"
      }`}
    >
      <div className="  flex-grow px-4 py-6 sm:px-6 md:px-10 lg:px-20 xl:px-36">
        <Header />
        <FilterBar />
        <ExtCard />
      </div>
    </div>
  );
}
