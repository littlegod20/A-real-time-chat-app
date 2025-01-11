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
import { AuthType } from "@/utils/types";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  // defined my form
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpData,
  });

  const navigate = useNavigate();

  // define my onsubmit function
  const onSubmit = (value: z.infer<typeof signUpFormSchema>) => {
    console.log(value);
    navigate("/login");
  };

  return (
    <main className="w-full flex justify-center">
      <div className="min-h-screen flex items-center">
        <section className="flex flex-col justify-center space-y-4 bg-white p-5 rounded-md">
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
                  name={item.label.camelCase() as keyof AuthType}
                  key={item.label}
                  render={({ field, fieldState: { error } }) => (
                    <FormItem>
                      <FormLabel>
                        <p className="text-sky-950 font-semibold text-xs">
                          {item.label.capitalize()}
                        </p>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={item.placeholder}
                          {...field}
                          className="focus-visible:ring-1 focus-visible:ring-sky-900"
                          type={item.type}
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
      </div>
    </main>
  );
};

export default SignUp;
