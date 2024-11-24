import { useState, useTransition } from "react";
import DashTabSm from "../widgets/DashTabSm";
import { dashTabs } from "@/lib/constants";
// import { useNavigate } from "react-router-dom";

const DashboardMobile = () => {
  const [activeTab, setActiveTab] = useState("chats");
  const [, startTransition] = useTransition();

  const handleSetActiveTab = (val: string) => {
    startTransition(() => setActiveTab(val));
  };

  return (
    <main className="flex justify-evenly items-center p-2 text-xs sm:hidden  bottom-0 z-50 sticky bg-red-600 h-[10%]">
      {dashTabs.map((item, index) => (
        <DashTabSm
          name={item.name}
          Icon={item.icon}
          activeTab={activeTab}
          handleSetActiveTab={handleSetActiveTab}
          key={index}
        />
      ))}
    </main>
  );
};

export default DashboardMobile;
