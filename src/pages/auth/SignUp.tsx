import { signUpFormSchema } from "@/schema/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { formLabels, signUpData } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthType } from "@/types";
import { Link } from "react-router-dom";

const SignUp = () => {
  // defined my form
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpData,
  });

  // define my onsubmit function
  const onSubmit = (value: z.infer<typeof signUpFormSchema>) => {
    console.log(value);
  };

  return (
    <main className="w-full flex justify-center">
      <section className="min-h-screen flex flex-col justify-center items-start space-y-4">
        <header className="space-y-1">
          <h1 className="text-xl font-bold text-sky-800">Sign Up</h1>
          <p className="text-xs text-slate-500 italic font-medium">
            Welcome to Chatty🎉, Please sign up below
          </p>
        </header>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-1/2 sm:w-[400px] space-y-3"
          >
            {formLabels.map((item) => (
              <FormField
                control={form.control}
                name={item.label as keyof AuthType}
                key={item.label}
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel>
                      <p className="text-sky-950 font-semibold text-xs">
                        {item.label[0].toUpperCase() + item.label.slice(1)}
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={item.placeholder}
                        {...field}
                        className="focus-visible:ring-1 focus-visible:ring-sky-900"
                      />
                    </FormControl>
                    {error ? (
                      <p className="text-red-600 text-xs">{error.message}</p>
                    ) : (
                      ""
                    )}
                  </FormItem>
                )}
              />
            ))}
            <div className="pt-3">
              <Button
                type="submit"
                className="w-full hover:bg-sky-950 bg-sky-900"
              >
                Submit
              </Button>
              <div className="w-full flex justify-center pt-2">
                <p className="text-sm">
                  Already have an account? Log in{" "}
                  <Link
                    to="/login"
                    className="text-sky-950 font-semibold hover:text-sky-600 hover:cursor-pointer"
                  >
                    here
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
};

export default SignUp;
