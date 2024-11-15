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
    <>
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
                    <Input placeholder={item.placeholder} {...field} />
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
    </>
  );
};

export default SignUp;
