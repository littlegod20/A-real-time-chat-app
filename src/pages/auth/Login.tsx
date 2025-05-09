import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginData, loginFormLabels } from "@/lib/constants";
import { loginFormSchema } from "@/schema/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const Login = () => {
  // form configuration
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginData,
  });

  const navigate = useNavigate();

  // handling submit
  const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
    const isEmailInput = data.userNameOrEmail.includes("@");
    
    console.log(
      isEmailInput ? "Email login:" : "Username login",
      data.userNameOrEmail
    );
    // console.log(data);
    navigate("/chats");
  };

  return (
    <main className="w-full flex justify-center">
      <div className="min-h-screen flex items-center">
        <section className=" flex flex-col justify-center items-start space-y-4 bg-white p-5 rounded-md">
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
              {loginFormLabels.slice(0, 2).map((item) => (
                <FormField
                  control={form.control}
                  name={
                    item.label.camelCase() as "userNameOrEmail" | "password"
                  }
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
                          type={item.type || "text"}
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
                    Don't have an account? Sign up{" "}
                    <Link
                      to="/signup"
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

export default Login;
