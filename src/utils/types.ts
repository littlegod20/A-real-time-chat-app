import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export interface AuthType {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
}

export interface FormTypes {
  label: string;
  placeholder: string;
  type?: string;
  Icon?: LucideIcon;
}

export interface DashType {
  activeTab: string;
  handleSetActiveTab: (val: string) => void;
  isDashboard?: boolean;
  Icon: LucideIcon | IconType;
  name: string;
}
