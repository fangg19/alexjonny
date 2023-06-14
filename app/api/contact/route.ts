import Error from "next/error";
import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { ClientResponse } from "@sendgrid/client/src/response";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
  const req = await request.json();
  //   console.log("req ---->>>", req);
  const { name, email, subject, message, token } = req;
  //   validateHuman(token);

  const emailBody = `
      <h3>Name: </h3> <p>${name}</p>\r\n  
      <h3>Email: </h3> <p>${email}</p>\r\n  
      <h3>Subject: </h3> <p>${subject}</p>\r\n  
      <h3>Message: </h3> <p>${message}</p>`;

  const emailData = {
    to: "hello@alexjonny.com",
    from: "contact@alexjonny.com",
    subject: `${subject}`,
    text: emailBody,
    html: emailBody.replace(/\r\n/g, "<br>"),
  };

  await sgMail
    .send(emailData)
    .then((res: [ClientResponse, {}]) => {
      console.log(
        "res after sendgrid email send function was called --->>>",
        res
      );
      NextResponse.json(
        {
          message: "Mail sent successfully",
        },
        {
          status: 200,
        }
      );
    })
    .catch((error: Error) => {
      console.error(error);
      NextResponse.json(
        {
          message: "There was an error sending the email",
        },
        {
          status: 400,
        }
      );
    });
}

const validateHuman = async (token: string) => {
  const secret = process.env.RECAPTCHA_PRIVATE_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: "POST" }
  );

  const data = await response.json();
  return data.success;
};
