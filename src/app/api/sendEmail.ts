"use server";
import { EmailTemplate } from "@/app/components/EmailTemplete";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateProps {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: EmailTemplateProps) => {
  const { name, subject, email, message } = formData;

  try {
    await resend.emails.send({
      from: "Mensaje de Contacto Portfolio <onboarding@resend.dev>",
      to: ["matubruno16@gmail.com"],
      reply_to: email,
      subject: `Contacto Portfolio - ${name}`,
      text: `Este es un mensaje de contacto de ${name} - ${email} `,
      react: EmailTemplate({
        name,
        subject,
        email,
        message,
      }) as React.ReactElement,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error sending email:", error);
    return { error: error.message };
  }
};
