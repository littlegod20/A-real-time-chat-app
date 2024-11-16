import { AuthType, FormTypes } from "@/types";



export const formLabels: FormTypes[] = [
  {
    label: "name",
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



export const signUpData:AuthType = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

export const loginData: Partial<AuthType> = {
  email: "",
  password: "",
};
