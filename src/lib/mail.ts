import nodemailer from "nodemailer";
import { SITE } from "@/lib/constants";

type SendArgs = {
  subject: string;
  text: string;
  /** Reply-To address (the person who submitted the form). */
  replyTo?: string;
};

/**
 * Sends a notification email for form submissions.
 *
 * Configure via environment variables (e.g. a Gmail App Password):
 *   SMTP_HOST=smtp.gmail.com
 *   SMTP_PORT=465
 *   SMTP_USER=dandora.online@gmail.com
 *   SMTP_PASS=<gmail app password>
 *   MAIL_TO=dandora.online@gmail.com   (optional, defaults to SITE.email)
 *   MAIL_FROM="Dandora Website <dandora.online@gmail.com>"  (optional)
 *
 * If SMTP is not configured, the submission is logged instead of sent, so the
 * form still succeeds in development.
 */
export async function sendMail({
  subject,
  text,
  replyTo,
}: SendArgs): Promise<{ delivered: boolean }> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO || SITE.email;
  const from = process.env.MAIL_FROM || user;

  if (!host || !user || !pass) {
    console.warn(
      "[mail] SMTP not configured — logging submission instead of sending.\n" +
        `To: ${to}\nSubject: ${subject}\n${text}`,
    );
    return { delivered: false };
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    replyTo,
  });

  return { delivered: true };
}
