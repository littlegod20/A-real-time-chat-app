import { formSchema } from "@/schema/form.schema";
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
import { formLabels } from "@/lib/constants";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Forms = () => {
  // defined my form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  // define my onsubmit function
  const onSubmit = (value: z.infer<typeof formSchema>) => {
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
              name={item.label as "name"}
              key={item.label}
              render={({ field , fieldState:{error}}) => (
                <FormItem>
                  <FormLabel>
                    {item.label[0].toUpperCase() + item.label.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={item.placeholder} {...field} />
                    {error ? 
                      <div>
                        {error.message}
                      </div>
                     : ''}
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <div className="pt-3">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Forms;
