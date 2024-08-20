import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
interface WelcomeEmailProps {
  firstName?: string;
  message: string;
  previewText: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const WelcomeEmail = ({
  firstName = "",
  message,
  previewText,
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>{previewText}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          // src={`${baseUrl}/images/login.jpeg`}
          src="https://utfs.io/f/87eb5177-1157-44e7-aed1-9a9c29a253b0-1zbfv.png"
          width="50"
          height="50"
          alt="CareCnnect"
        />

        <Text style={title}>
          <strong>@{firstName}</strong>, thank you for Joining Us in Saving
          Lives
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>{firstName}</strong>!
          </Text>
          <Text style={text}>{message}</Text>

          <Text style={text}>
            If you have any questions, feel free to reach out.
          </Text>
        </Section>
        <Text style={links}>
          <Link style={link}>Your security audit log</Link> ・{" "}
          <Link style={link}>Contact support</Link>
        </Text>

        <Text style={footer}>
          CareConnect, proudly developed by Isaac NSB. Kargbo -
          devprogramming22@gmail.com
          {/* <a href="mailto:devprogramming22@gmail.com">
          </a> */}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "24px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
