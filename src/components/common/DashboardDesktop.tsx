import { Menu } from "lucide-react";
import { useCallback, useEffect, useState, useTransition } from "react";
import DashTabBg from "../widgets/DashTabBg";
import { dashTabs } from "@/lib/constants";
import { useNavigate } from "react-router-dom";

const DashboardDesktop = () => {
  const [, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState("chats");
  const [isDashboard, setIsDashboard] = useState(false);

  const navigate = useNavigate();

  const handleSetActiveTab = useCallback((val: string) => {
    // this is used to set priority for the tabs. so when a user has already clicked a tab an is in the process of loading and then the user clicks another tab to move there, this code allows the user to move freely to the new tab without waiting for the current tab to finish loading
    startTransition(() => setActiveTab(val));
    navigate(`/${val}`);

    localStorage.setItem("activeTab", val);

    console.log("val:", val);
  }, [navigate]);

  const handleOpenDashboard = () => {
    setIsDashboard(!isDashboard);
  };

  useEffect(() => {
    const currentTab = localStorage.getItem("activeTab");
    console.log("current tab:", currentTab);
    if (currentTab) {
      handleSetActiveTab(currentTab);
    }
  }, [handleSetActiveTab]);

  return (
    <main
      className={`hidden sm:block h-screen bg-sky-950 w-72 relative z-50 transition-all ${
        isDashboard ? "" : "w-[70px]"
      }`}
    >
      <header className="relative top-0 flex items-center gap-4 p-4">
        <img src={"/chat.png"} alt="logo image" className="w-8" />
        {isDashboard ? <p className="text-sm italic">ChatApp</p> : ""}
      </header>

      <aside className="px-2 flex justify-start">
        <div
          className="hover:bg-sky-900 flex justify-center duration-300 ease-in transition-colors p-2 rounded-md"
          onClick={handleOpenDashboard}
        >
          <Menu />
        </div>
      </aside>

      <section className="space-y-2 p-2 h-[65%]">
        {dashTabs.slice(0, 3).map((item, index) => (
          <DashTabBg
            name={item.name}
            isDashboard={isDashboard}
            handleSetActiveTab={handleSetActiveTab}
            activeTab={activeTab}
            Icon={item.icon}
            key={index}
          />
        ))}
      </section>

      <section className="flex flex-col p-2 space-y-3">
        {dashTabs.slice(3).map((item, index) => (
          <DashTabBg
            name={item.name}
            isDashboard={isDashboard}
            handleSetActiveTab={handleSetActiveTab}
            activeTab={activeTab}
            Icon={item.icon}
            key={index}
          />
        ))}
      </section>
    </main>
  );
};

export default DashboardDesktop;
