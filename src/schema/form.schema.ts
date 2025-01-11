import { z } from "zod";

export const signUpFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email field is empty" })
      .email({ message: "Please use a valid email." }),
    password: z
      .string()
      .min(6, { message: "password must contain 6 or more characters" }),
    confirmPassword: z.string(),
    userName: z
      .string()
      .min(4, { message: "User name must have 4 or more chars" })
      .regex(/^[\w_.]+\s*/i, "User name must start with a letter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  userNameOrEmail: z
    .string()
    .min(4, { message: "Invalid input" })
    .regex(
      /^[\w]+@[a-z.]+[a-z]+ | ^[\w_.]+\s*/i,
      "Email or username is not valid"
    ),
  password: z
    .string()
    .min(6, { message: "password must contain 6 or more characters" }),
});
