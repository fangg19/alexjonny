import { NextResponse } from "next/server";
import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message, token } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "contact@alexjonny.com",
      to: "hello@alexjonny.com",
      subject: subject,
      react: EmailTemplate({ firstName: name }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
