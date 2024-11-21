import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export interface AuthType {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface FormTypes {
  label: string;
  placeholder: string;
}

export interface DashType {
  activeTab: string;
  handleSetActiveTab: (val: string) => void;
  isDashboard?: boolean;
  Icon: LucideIcon | IconType;
  name: string;
}
