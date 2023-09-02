import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
type contactEmailProps = {
  message: string;
  senderEmail: string;
};

export default function contactFormEmail({
  message,
  senderEmail,
}: contactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message From Your React App</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You Recieve The Contact Form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>From : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
