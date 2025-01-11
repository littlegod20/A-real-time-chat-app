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
    label: "first Name",
    placeholder: "eg. John",
    type: "text",
  },
  {
    label: "surname",
    placeholder: "eg. Doe",
    type: "text",
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
  {
    label: "email",
    placeholder: "eg. johndoe@gmail.com",
    type: "email",
  },
  {
    label: "user name",
    placeholder: "eg. @jonny30",
    type: "text",
  },
];

export const signUpData: AuthType = {
  firstName: "",
  surname: "",
  password: "",
  confirmPassword: "",
  email: "",
  userName: "",
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
