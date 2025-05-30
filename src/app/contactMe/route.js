import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ifeoma.onerhime@gmail.com",
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
