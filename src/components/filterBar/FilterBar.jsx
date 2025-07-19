import Buttons from "../common/Buttons";
import { useThemContext } from "../../context/ThemContextProvider";
import { useExtData } from "../../context/ExtContextProvidr";

export default function FilterBar() {
  const { filterType, setFilterType } = useExtData();
  const { isDarkMode } = useThemContext();

  return (
    <div className="flex justify-between mt-16 flex-col sm:flex-row">
      <h1 className={` text-3xl ${isDarkMode ? "text-white " : "text-black"}`}>
        {" "}
        Extensions List{" "}
      </h1>
      <div className="space-x-3 mt-4 sm:mt-0 sm:flex sm:items-center w-full sm:w-auto ">
        {filterType.map((filter) => (
          <Buttons
            key={filter.label}
            label={filter.label}
            selectedBut={filter.isSelected}
            onClick={() => {
              setFilterType((prev) =>
                prev.map((item) =>
                  item.label === filter.label
                    ? { ...item, isSelected: true }
                    : { ...item, isSelected: false }
                )
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}
