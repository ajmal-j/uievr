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
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className='centered-wrapper flex flex-col gap-16 font-dmSans'>
      <div className='flex gap-20 items-start justify-stretch'>
        <div className='flex-1 text-[#797C86]'>
          <div className='flex flex-col gap-7'>
            <h3 className='font-semibold uppercase text-[41px] leading-none'>
              Contact Information
            </h3>
            <p className='text-[19.5px]'>
              Feel free to reach out to us through various channels. We are
              available by phone, email, and social media for your convenience.
            </p>
          </div>
        </div>
        <div className='flex-[2] flex items-center justify-start gap-12'>
          <a
            href='tel:+1-123-456-7890'
            target='_blank'
            className='inline-flex items-center gap-3 border-b border-b-[#2F2F37] pb-1'
          >
            <span className='text-[#F2F2F3] text-[19.5px] font-medium'>
              +1-123-456-7890
            </span>
            <img
              src='/pages/home/icons/arrow-top-right.svg'
              className='w-[20px] object-contain mt-1'
              alt='Arrow top right'
            />
          </a>
          <a
            href='mailto:info@damienbraunphotography.com'
            target='_blank'
            className='inline-flex items-center gap-3 border-b border-b-[#2F2F37] pb-1'
          >
            <span className='text-[#F2F2F3] text-[19.5px] font-medium'>
              info@damien braunphotography.com
            </span>
            <img
              src='/pages/home/icons/arrow-top-right.svg'
              className='w-[20px] object-contain mt-1'
              alt='Arrow top right'
            />
          </a>
        </div>
      </div>

      <div className='flex gap-20 items-start justify-stretch'>
        <div className='flex-1 text-[#797C86]'>
          <div className='flex flex-col gap-7'>
            <h3 className='font-semibold uppercase text-[41px] leading-none'>
              Send Me a Message
            </h3>
            <p className='text-[19.5px]'>
              Have a specific inquiry or message for us? Please use the contact
              form below, and we'll get back to you promptly.
            </p>
          </div>
        </div>
        <div className='flex-[2]'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='grid grid-cols-2 gap-x-16 gap-y-12'
            >
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='First Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Last Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Email Address' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder='Phone Number' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem className='col-span-2'>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Input placeholder='Message' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div></div>

              <button className='flex items-center gap-1 border-b border-b-[#1C1C21]'>
                <span className='text-[46px] font-semibold text-white uppercase text-nowrap'>
                  send message
                </span>
                <span className='bg-[#4A2CED] px-9 py-4 rounded-full shadow-inner shadow-white/30 w-full grid place-content-center'>
                  <img
                    src='/pages/home/icons/arrow-top-right.svg'
                    className='w-[20px] object-contain mt-[2px]'
                    alt='Arrow top right'
                  />
                </span>
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
