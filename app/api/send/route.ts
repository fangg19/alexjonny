import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmailTemplate } from "@/react-email-starter/emails/contact-email-template";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: "contact@alexjonny.com",
      to: "hello@alexjonny.com",
      subject: subject,
      react: await ContactEmailTemplate({ name, email, subject, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
