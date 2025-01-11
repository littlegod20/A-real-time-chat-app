import { z } from "zod";
import { isEmail } from "validator";

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
      .regex(/^[a-zA-Z0-9_-]{3,20}$/, "User name must start with a letter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginFormSchema = z.object({
  userNameOrEmail: z
    .string()
    .min(1, { message: "Username or email is required" })
    .refine(
      (value) => {
        if (value.includes("@")) {
          return isEmail(value);
        }

        // check username validation
        return /^[a-zA-Z0-9_-]{3,20}$/.test(value);
      },
      {
        message:
          "Please enter a valid email or username (3-20 chars, letters, numbers, _ or - only)",
      }
    ),
  password: z
    .string()
    .min(6, { message: "password must contain 6 or more characters" }),
});
