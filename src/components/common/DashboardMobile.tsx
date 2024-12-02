import { useCallback, useEffect, useState, useTransition } from "react";
import DashTabSm from "../widgets/DashTabSm";
import { dashTabs } from "@/lib/constants";
import { useNavigate } from "react-router-dom";

const DashboardMobile = () => {
  const [activeTab, setActiveTab] = useState("chats");
  const [, startTransition] = useTransition();

  const navigate = useNavigate();

  const handleSetActiveTab = useCallback(
    (val: string) => {
      startTransition(() => setActiveTab(val));
      navigate(`/${val}`);
      localStorage.setItem("activeTab", val);
    },
    [navigate]
  );

  useEffect(() => {
    const currentTab = localStorage.getItem("activeTab");
    if (currentTab) {
      handleSetActiveTab(currentTab);
    }
  }, [handleSetActiveTab]);

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
