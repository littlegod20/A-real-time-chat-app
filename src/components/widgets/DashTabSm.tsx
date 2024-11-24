import { DashType } from "@/utils/types";
import { Link } from "react-router-dom";

const DashTabSm: React.FC<DashType> = ({
  name,
  Icon,
  activeTab,
  handleSetActiveTab,
}) => {
  
  return (
    <>
      <Link
        to={`/${name.toLowerCase()}`}
        className={`flex flex-col items-center gap-1 ${
          activeTab === name ? "text-blue-600" : ""
        }`}
        onClick={() => handleSetActiveTab(name)}
      >
        <Icon size={20} />
        <p className="font-bold">{name}</p>
      </Link>
    </>
  );
};

export default DashTabSm;
