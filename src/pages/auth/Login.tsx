import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formLabels, loginData } from "@/lib/constants";
import { loginFormSchema } from "@/schema/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Login = () => {
  // form configuration
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginData,
  });

  // handling submit
  const onSubmit = (val: z.infer<typeof loginFormSchema>) => {
    console.log(val);
  };

  return (
    <main className="w-full flex justify-center">
      <section className="min-h-screen flex flex-col justify-center items-start space-y-4">
        <header className="space-y-1">
          <h1 className="text-xl font-bold text-sky-800">Login</h1>
          <p className="text-xs text-slate-500 italic font-medium">
            Please log in with your valid credentials
          </p>
        </header>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-1/2 sm:w-[400px] space-y-3"
          >
            {formLabels.slice(2).map((item) => (
              <FormField
                control={form.control}
                name={item.label as "email" | "password"}
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
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
};

export default Login;
