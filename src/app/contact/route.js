import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: email,
      to: "ifeoma.onerhime@gmail.com.com",
      subject: `New Contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
