import { AuthType, FormTypes } from "@/utils/types";
import {
  CircleDashed,
  MessageCircle,
  Phone,
  Settings,
  UserRoundPen,
} from "lucide-react";

export const formLabels: FormTypes[] = [
  {
    label: "user name",
    placeholder: "eg. jonny30",
    type: "text",
  },
  {
    label: "email",
    placeholder: "eg. johndoe@gmail.com",
    type: "email",
  },
  {
    label: "password",
    placeholder: "five alphanumeric chars or more",
    type: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Enter password again",
    type: "password",
  },
];

export const loginFormLabels: FormTypes[] = [
  {
    label: "user name or Email",
    placeholder: "eg. john32 or john@gmail.com",
  },
  {
    label: "password",
    placeholder: "Enter password",
    type: "password",
  },
];

export const signUpData: AuthType = {
  password: "",
  confirmPassword: "",
  email: "",
  userName: "",
};

export const loginData: Partial<AuthType> = {
  userNameOrEmail: "",
  password: "",
};

export const dashTabs = [
  {
    name: "chats",
    icon: MessageCircle,
  },
  {
    name: "status",
    icon: CircleDashed,
  },
  {
    name: "calls",
    icon: Phone,
  },
  {
    name: "settings",
    icon: Settings,
  },
  {
    name: "profile",
    icon: UserRoundPen,
  },
];
