
import * as React from "react";
import {
  Body,
  Container,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ name, subject, email, message }) => (
  <Html>
    <Preview>
      {name} - {email}
    </Preview>
    <Tailwind>
      <Body className="bg-neutral-100 m-auto">
        <Container className="flex flex-col items-start justify-center gap-8 p-14 bg-neutral-900 text-neutral-100 rounded-md text-lg">
          <Text>
            <strong>E-mail:</strong> {email}
          </Text>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Subject:</strong> {subject}
          </Text>
          <Text>
            <strong>Message:</strong> {message}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
