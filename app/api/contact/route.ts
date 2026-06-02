import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  contactType?: string;
  yearLevel?: string;
  subject?: string;
  preferredTime?: string;
  message?: string;
  planSummary?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "name",
  "email",
  "contactType",
  "yearLevel",
  "subject",
  "preferredTime",
  "message",
];

function clean(value?: string) {
  return value?.trim() || "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const missingFields = requiredFields.filter((field) => !clean(body[field]));

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
          missingFields,
        },
        { status: 400 },
      );
    }

    const name = clean(body.name);
    const email = clean(body.email);
    const contactType = clean(body.contactType);
    const yearLevel = clean(body.yearLevel);
    const subject = clean(body.subject);
    const preferredTime = clean(body.preferredTime);
    const message = clean(body.message);
    const planSummary = clean(body.planSummary);

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { error: "Email is not configured yet." },
        { status: 500 },
      );
    }

    const textEmail = `
New Caleb Tutoring enquiry

Name: ${name}
Email: ${email}
Parent or student: ${contactType}
Year level: ${yearLevel}
Subject: ${subject}
Preferred day/time: ${preferredTime}

Message:
${message}
${planSummary ? `\nCustom Plan Builder summary:\n${planSummary}` : ""}
`.trim();

    const htmlEmail = `
      <h2>New Caleb Tutoring enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Parent or student:</strong> ${escapeHtml(contactType)}</p>
      <p><strong>Year level:</strong> ${escapeHtml(yearLevel)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Preferred day/time:</strong> ${escapeHtml(preferredTime)}</p>
      <h3>Message</h3>
      <pre style="font-family: Arial, sans-serif; white-space: pre-wrap;">${escapeHtml(
        message,
      )}</pre>
      ${
        planSummary
          ? `<h3>Custom Plan Builder summary</h3><pre style="font-family: Arial, sans-serif; white-space: pre-wrap;">${escapeHtml(
              planSummary,
            )}</pre>`
          : ""
      }
    `;

    // Backend flow: validate the form, then ask Resend to send the email.
    // The API key stays on the server and is never exposed to the browser.
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Caleb Tutoring enquiry from ${name}`,
        text: textEmail,
        html: htmlEmail,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.json().catch(() => null);

      return NextResponse.json(
        {
          error: "The enquiry could not be sent yet.",
          details: resendError,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending the enquiry." },
      { status: 500 },
    );
  }
}
