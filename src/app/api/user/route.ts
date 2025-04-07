import { NextResponse } from "next/server";
import prisma from "@/db/index";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, phoneNumber, message, name, sessionDone, archive } = body;

  if (!email || !phoneNumber || !message || !name) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      email,
      phoneNumber,
      message,
      name,
      sessionDone,
      archive
    },
  });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,      
        pass: process.env.EMAIL_PASS,        
      },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "ratatsam905@gmail.com",
        subject: "New User Signup - Gym Trainer Site",
        html: `
          <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; background-color: #f9f9f9; border-radius: 12px; padding: 24px; border: 1px solid #ddd;">
            <h2 style="text-align: center; color: #222;">💪 New User Signup</h2>
            <div style="background-color: #fff; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="margin-bottom: 12px;"><strong>Name:</strong> ${name}</p>
              <p style="margin-bottom: 12px;"><strong>Email:</strong> ${email}</p>
              <p style="margin-bottom: 12px;"><strong>Phone Number:</strong> ${phoneNumber}</p>
              <p style="margin-bottom: 12px;"><strong>Message:</strong> ${message}</p>
              <p style="margin-bottom: 0;"><strong>Session Done:</strong> ${sessionDone ?? "false"}</p>
            </div>
            <p style="margin-top: 24px; font-size: 14px; text-align: center; color: #888;">This email was automatically generated from your Gym Trainer website.</p>
          </div>
        `,
      };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: "User created but failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ message: "User created and email sent successfully" }, { status: 201 });
}


export async function GET(req: Request) {
    try {
      const users = await prisma.user.findMany({
        orderBy: { createdAt: "desc" }, 
      });
  
      return NextResponse.json(users, { status: 200 });
    } catch (error) {
      console.error("Failed to fetch users:", error);
      return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}
