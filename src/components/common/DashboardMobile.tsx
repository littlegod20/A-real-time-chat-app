import { useEffect, useState } from "react";
import DashTabSm from "../widgets/DashTabSm";
import { dashTabs } from "@/lib/constants";
import { useNavigate } from "react-router-dom";

const DashboardMobile = () => {
  // const [, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState("Chats");

  const navigate = useNavigate();

  const handleSetActiveTab = (val: string) => {
    setActiveTab(val);
  };

  useEffect(() => {
    navigate(`/${activeTab}`);
  }, [navigate, activeTab]);

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
