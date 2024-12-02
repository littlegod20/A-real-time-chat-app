import { DashType } from "@/utils/types";

const DashTabBg: React.FC<DashType> = ({
  activeTab,
  handleSetActiveTab,
  isDashboard,
  Icon,
  name,
}) => {
  return (
    <>
      <div
        className={`flex gap-2 hover:bg-sky-900 p-2 rounded-sm transition-all duration-300 ease-in hover:cursor-pointer ${
          activeTab === name ? "bg-sky-900" : ""
        }`}
        onClick={() => handleSetActiveTab(name)}
      >
        {" "}
        <Icon size={25} /> {isDashboard ? `${name.capitalize()}` : ""}
      </div>
    </>
  );
};

export default DashTabBg;
