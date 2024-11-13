

export interface Props{
  label:string;
  placeholder:string
}


export const formLabels:Props[] = [
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
