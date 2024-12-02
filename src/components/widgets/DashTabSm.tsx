import { DashType } from "@/utils/types";

const DashTabSm: React.FC<DashType> = ({
  name,
  Icon,
  activeTab,
  handleSetActiveTab,
}) => {
  return (
    <>
      <div
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          activeTab === name ? "text-blue-600" : ""
        }`}
        onClick={() => handleSetActiveTab(name)}
      >
        <Icon size={20} />
        <p className="font-bold">{name.capitalize()}</p>
      </div>
    </>
  );
};

export default DashTabSm;
