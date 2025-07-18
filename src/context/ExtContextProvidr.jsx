import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const ExtDataContext = createContext();

function ExtContextProvidr({ children }) {
  const [extData, setExtData] = useState([]);
  const [isLoding, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectExt, SetSelectedExt] = useState("All");
  const [filterType, setFilterType] = useState([
    { label: "All", value: "all", isSelected: true },
    { label: "Active", value: "active", isSelected: false },
    { label: "Inactive", value: "inactive", isSelected: false },
  ]);

  useEffect(() => {
    const fetchExtData = () => {
      setIsloading(true);
      axios
        .get("http://localhost:3000/Extensions")
        .then((res) => {
          setExtData(res.data);
          setIsloading(false);
        })
        .catch((err) => {
          setIsloading(false);
          setErrorMessage(err.errorMessage);
        })
        .finally(() => setIsloading(false));
    };
    fetchExtData();
  }, []);

  return (
    <ExtDataContext.Provider
      value={{
        filterType,
        setFilterType,
        extData,
        setExtData,
        errorMessage,
        isLoding,
        selectExt,
        SetSelectedExt,
      }}
    >
      {children}
    </ExtDataContext.Provider>
  );
}
function useExtData() {
  if (!ExtDataContext)
    throw new Error("useExtData must be used within an ExtContextProvider");

  return useContext(ExtDataContext);
}

export { ExtContextProvidr, useExtData };
