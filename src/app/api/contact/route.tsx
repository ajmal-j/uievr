import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const validateBody = z.object({
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
    .min(10, {
      message: "Phone number must be at least 10 characters.",
    }),
  message: z
    .string({
      required_error: "invalid message",
    })
    .min(10, {
      message: "Message must be at least 10 characters.",
    }),
});

const generateEmailTemplate = (
  title: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string,
  footer: string
) => `
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
          body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
          .container { max-width: 600px; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); margin: auto; }
          h2 { color: #333; }
          p { color: #555; line-height: 1.6; }
          .footer { margin-top: 20px; font-size: 14px; color: #777; }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>${title}</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p class="footer">${footer}</p>
      </div>
  </body>
  </html>
`;

const createTransporter = (user: string, pass: string) => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
    tls: { ciphers: "SSLv3", rejectUnauthorized: false },
  });
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName, lastName, message, phone } =
      validateBody.parse(body);

    const username = process.env.COMPANY_EMAIL;
    const password = process.env.COMPANY_PASS;
    const helpUsername = process.env.COMPANY_EMAIL;

    if (!username || !password || !helpUsername) {
      console.log("Email or password not found.");

      return NextResponse.json({
        message: "Something went wrong. Please try again.",
      });
    }

    const transporter = createTransporter(username, password);

    await transporter.sendMail({
      from: username,
      to: email,
      replyTo: username,
      subject: "Uievr Designs - Contact Request",
      text: "Thank you for reaching out to us. Uievr Designs.",
    });

    await transporter.sendMail({
      from: username,
      to: helpUsername,
      replyTo: username,
      subject: "Contact Request from Uievr.",
      html: generateEmailTemplate(
        "Contact Request from Uievr",
        firstName,
        lastName,
        email,
        phone,
        message,
        "Thank you for reaching out to us. Our team will get back to you shortly."
      ),
    });

    return NextResponse.json({
      message:
        "Thank you for contacting Uievr, our team will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Oh no, something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
