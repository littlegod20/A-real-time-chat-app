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
    label: "first name",
    placeholder: "eg. John",
  },
  {
    label: "surname",
    placeholder: "eg. Doe",
  },
  {
    label: "email",
    placeholder: "eg. johndoe@gmail.com",
  },
  {
    label: "password",
    placeholder: "five alphanumeric chars or more",
  },
];

export const signUpData: AuthType = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

export const loginData: Partial<AuthType> = {
  email: "",
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
