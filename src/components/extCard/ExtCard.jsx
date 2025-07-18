import { useThemContext } from "../../context/ThemContextProvider";
import { useExtData } from "../../context/ExtContextProvidr";

import Buttons from "../common/Buttons";

export default function ExtCard() {
  const { isDarkMode } = useThemContext();
  const { extData, setExtData, filterType } = useExtData();
  if (!extData) return <div>Loading...</div>; // safeguard
  const selectedItem = filterType.find((item) => item.isSelected === true);

  console.log("........", selectedItem);

  return (
    <div className="flex flex-wrap gap-4 mt-10 overflow-y-auto max-h ">
      {extData.map((ext) =>
        selectedItem.label === "All" ? (
          <CardComp
            key={ext.name}
            isDarkMode={isDarkMode}
            ext={ext}
            setExtData={setExtData}
            extData={extData}
          />
        ) : selectedItem.label === "Active" && ext.isActive ? (
          <CardComp
            key={ext.name}
            isDarkMode={isDarkMode}
            ext={ext}
            setExtData={setExtData}
            extData={extData}
          />
        ) : selectedItem.label === "Inactive" && !ext.isActive ? (
          <CardComp
            key={ext.name}
            isDarkMode={isDarkMode}
            ext={ext}
            setExtData={setExtData}
            extData={extData}
          />
        ) : null
      )}
    </div>
  );
}

function CardComp({ isDarkMode, ext, setExtData, extData }) {
  return (
    <div
      key={ext.name}
      className={`w-80 justify-between flex-col rounded-3xl m-4 ${
        isDarkMode ? "bg-[#1F2535] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex p-2">
        <div className="p-2 h-40 w-40">
          <img
            alt={ext.name}
            src={ext.logo
              .replace("./", "/")
              .replace("/assets/images/", "/images/")}
          />
        </div>
        <div>
          <h2 className="font-bold">{ext.name}</h2>
          <p className="mt-4">{ext.description}</p>
        </div>
      </div>

      <div className="flex m-2 justify-between items-center">
        <Buttons
          label={"Remove"}
          onClick={() => {
            setExtData((extLis) =>
              extLis.filter((extension) => extension.name !== ext.name)
            );
            console.log(extData);
          }}
        />

        {/* Custom Tailwind Switch */}
        <button
          onClick={() => {
            setExtData((prevList) =>
              prevList.map((item) =>
                item.name === ext.name
                  ? { ...item, isActive: !item.isActive }
                  : item
              )
            );
          }}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
            ext.isActive ? "bg-red-400" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              ext.isActive ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
