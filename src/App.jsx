import { ThemContextProvider } from "./context/ThemContextProvider";
import { ExtContextProvidr } from "./context/ExtContextProvidr";

import AppLayout from "./components/appLayout/AppLayout";

export default function App() {
  return (
    <ThemContextProvider>
      <ExtContextProvidr>
        <AppLayout />
      </ExtContextProvidr>
    </ThemContextProvider>
  );
}
{
  /* <div className="bg-gradient-to-b from-[#040918] to-[#091540]"></div> */
}
