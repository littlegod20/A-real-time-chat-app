import {
  CircleDashed,
  Menu,
  MessageCircle,
  Phone,
  Settings,
  UserRoundPen,
} from "lucide-react";
import chat from "../../assets/chat.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardDesktop = () => {
  const [activeTab, setActiveTab] = useState("chats");
  const [isDashboard, setIsDashboard] = useState(true);

  const handleSetActiveTab = (val: string) => {
    setActiveTab(val);
  };

  const handleOpenDashboard = () => {
    setIsDashboard(!isDashboard);
  };

  return (
    <main
      className={`hidden sm:block h-screen bg-sky-950 w-72 relative z-50 transition-all ${
        isDashboard ? "" : "w-[70px]"
      }`}
    >
      <header className="relative top-0 flex items-center gap-4 p-4">
        <img src={chat} alt="logo image" className="w-8" />
        {isDashboard ? <p className="text-sm italic">ChatApp</p> : ""}
      </header>

      <aside className="px-2 flex justify-start">
        <div className="hover:bg-sky-900 flex justify-center duration-300 ease-in transition-colors p-2 rounded-md">
          <Menu onClick={handleOpenDashboard} />
        </div>
      </aside>

      <section className="space-y-2 p-2 h-[65%]">
        <Link
          to="/chats"
          className={`flex gap-2 hover:bg-sky-900 p-2 rounded-sm transition-all duration-300 ease-in hover:cursor-pointer ${
            activeTab === "chats" ? "bg-sky-900" : ""
          }`}
          onClick={() => handleSetActiveTab("chats")}
        >
          {" "}
          <MessageCircle size={25} /> {isDashboard ? "Chats" : ""}
        </Link>
        <Link
          to="/status"
          className={`flex gap-2 hover:bg-sky-900 p-2 rounded-sm transition-all duration-300 ease-in hover:cursor-pointer ${
            activeTab === "status" ? "bg-sky-900" : ""
          }`}
          onClick={() => handleSetActiveTab("status")}
        >
          {" "}
          <CircleDashed size={25} /> {isDashboard ? "Status" : ""}
        </Link>
        <Link
          to="/calls"
          className={`flex gap-2 hover:bg-sky-900 p-2 rounded-sm transition-all duration-300 ease-in hover:cursor-pointer ${
            activeTab === "calls" ? "bg-sky-900" : ""
          }`}
          onClick={() => handleSetActiveTab("calls")}
        >
          {" "}
          <Phone size={25} />
          {isDashboard ? "Calls" : ""}
        </Link>
      </section>

      <section className="flex flex-col p-2 space-y-3">
        <Link
          to="/settings"
          className={`flex gap-2 hover:bg-sky-900 p-2 rounded-sm transition-all duration-300 ease-in hover:cursor-pointer ${
            activeTab === "settings" ? "bg-sky-900" : ""
          }`}
          onClick={() => handleSetActiveTab("settings")}
        >
          <Settings /> {isDashboard ? "Settings" : ""}
        </Link>
        <Link
          to="/profile"
          className={`flex gap-2 hover:bg-sky-900 p-2 rounded-sm transition-all duration-300 ease-in hover:cursor-pointer ${
            activeTab === "profile" ? "bg-sky-900" : ""
          }`}
          onClick={() => handleSetActiveTab("profile")}
        >
          <UserRoundPen />
          {isDashboard ? "Profile" : ""}
        </Link>
      </section>
    </main>
  );
};

export default DashboardDesktop;
