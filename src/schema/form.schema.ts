import { z } from "zod";

export const signUpFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "first name should be at least 2 characters" })
      .max(50),
    surname: z
      .string()
      .min(2, { message: "surname should be at least 2 characters" })
      .max(50),
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
      .regex(/^[a-z\s*]+[_.\s*]+[0-9\s*]*/i, "User name must start with a letter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Please use a valid email." }),
  password: z
    .string()
    .min(6, { message: "password must contain 6 or more characters" }),
});
