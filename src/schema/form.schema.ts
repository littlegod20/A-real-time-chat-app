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
    email: z.string().email({ message: "Please use a valid email." }),
    password: z
      .string()
      .min(6, { message: "password must contain 6 or more characters" }),
    confirmPassword: z.string(),
    // userName: z
    //   .string()
    //   .regex(/@*[a-z0-9]/i, "User name should have an @ preceeding it."),
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
