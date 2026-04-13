"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required!" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Cretech <onboarding@resend.dev>",
      to: ["cretechdevelop@gmail.com"],
      subject: `Aduan Cretech dari ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #08308E;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: "Message sent successfully!" };
  } catch (err: any) {
    return { error: err.message || "Failed to send message" };
  }
}
