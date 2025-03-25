/* eslint-disable @next/next/no-img-element */
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/home-contact-form";
import { Input } from "@/components/ui/home-contact-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import validator from "validator";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  firstName: z
    .string({
      required_error: "invalid first name",
    })
    .min(2, {
      message: "First name must be at least 2 characters.",
    }),
  lastName: z
    .string({
      required_error: "invalid last name",
    })
    .min(2, {
      message: "Last name must be at least 2 characters.",
    }),
  email: z
    .string({
      required_error: "invalid email",
    })
    .email({
      message: "Please provide a valid email address.",
    }),
  phone: z
    .string({
      required_error: "invalid phone number",
    })
    .refine((val) => validator.isMobilePhone(val, "en-IN"), {
      message: "Please provide a valid phone number.",
    }),
  message: z
    .string({
      required_error: "invalid message",
    })
    .min(10, {
      message: "Message must be at least 10 characters.",
    }),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const response = await axios.post("/api/contact", values);

      const message = response.data.message;

      toast.success(message ? message : "Thank you for contacting us.");

      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      id="contact"
      className="centered-wrapper flex flex-col xl:gap-16 lg:gap-15 md:gap-14 sm:gap-12 gap-10 font-dmSans"
    >
      <div className="flex lg:flex-row flex-col xl:gap-20 lg:gap-14 md:gap-10 sm:gap-7 gap-5 items-start justify-stretch">
        <div className="lg:flex-1 md:flex-[1.4] lg:min-w-[400px] text-[#797C86]">
          <div className="flex flex-col xl:gap-7 lg:gap-6 md:gap-5 sm:gap-4 gap-3">
            <h3 className="font-semibold uppercase 2xl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[16px] leading-none">
              Contact Information
            </h3>
            <p className="xl:text-[19.5px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:max-w-none max-w-[450px]">
              Feel free to reach out to us through various channels. We are
              available by phone, email, and social media for your convenience.
            </p>
          </div>
        </div>
        <div className="lg:flex-[2] flex sm:flex-row flex-col sm:items-center items-start justify-start 2xl:gap-12 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-5 gap-4">
          <a
            href="tel:+918075426491"
            target="_blank"
            className="inline-flex items-center gap-3 border-b border-b-[#2F2F37] pb-1"
          >
            <span className="text-[#F2F2F3] xl:text-[19.5px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-medium">
              +91 8075426491
            </span>
            <img
              src="/pages/home/icons/arrow-top-right.svg"
              className="xl:w-[20px] lg:w-[16px] md:w-[14px] sm:w-[12px] w-[10px] object-contain md:mt-1 mt-0.5"
              alt="Arrow top right"
            />
          </a>
          <a
            href="mailto:uievrdesigns@gmail.com"
            target="_blank"
            className="inline-flex items-center gap-3 border-b border-b-[#2F2F37] pb-1"
          >
            <span className="text-[#F2F2F3] xl:text-[19.5px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-medium">
              uievrdesigns@gmail.com
            </span>
            <img
              src="/pages/home/icons/arrow-top-right.svg"
              className="xl:w-[20px] lg:w-[16px] md:w-[14px] sm:w-[12px] w-[10px] object-contain md:mt-1 mt-0.5"
              alt="Arrow top right"
            />
          </a>
        </div>
      </div>

      <div className="flex md:flex-row flex-col xl:gap-20 lg:gap-14 md:gap-10 sm:gap-7 gap-5 items-start justify-stretch">
        <div className="lg:flex-1 md:flex-[1.4] lg:min-w-[400px] text-[#797C86]">
          <div className="flex flex-col xl:gap-7 lg:gap-6 md:gap-5 sm:gap-4 gap-3">
            <h3 className="font-semibold uppercase 2xl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[16px] leading-none">
              Send Me a Message
            </h3>
            <p className="xl:text-[19.5px] lg:text-[16px] md:text-[14px] sm:text-[12px] lg:max-w-none text-[10px] m45-w-[">
              Have a specific inquiry or message for us? Please use the contact
              form below, and we&apos;ll get back to you promptly.
            </p>
          </div>
        </div>
        <div className="md:flex-[2]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 xl:gap-x-16 lg:gap-x-14 md:gap-x-10 sm:gap-x-7 gap-x-5 xl:gap-y-12 lg:gap-y-10 md:gap-y-8 sm:gap-y-6 gap-y-4"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-2 flex items-center justify-end">
                <button className="flex items-center sm:gap-2 gap-2 border-b border-b-[#1C1C21] pb-1 cursor-pointer">
                  <span className="xl:text-[46px] lg:text-[40px] md:text-[34px] sm:text-[28px] text-[22px] font-semibold text-white uppercase text-nowrap">
                    send message
                  </span>
                  <span className="bg-[#4A2CED] xl:px-9 lg:px-8 md:px-7 sm:px-6 px-5 md:py-4 sm:py-3 py-2 rounded-full shadow-inner shadow-white/30 w-full grid place-content-center">
                    {loading ? (
                      <Loader2 className="text-white animate-spin xl:w-[20px] lg:w-[16px] md:w-[14px] sm:w-[12px] w-[10px] object-contain" />
                    ) : (
                      <img
                        src="/pages/home/icons/arrow-top-right.svg"
                        className="xl:w-[20px] lg:w-[16px] md:w-[14px] sm:w-[12px] w-[10px] object-contain mt-[2px]"
                        alt="Arrow top right"
                      />
                    )}
                  </span>
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
