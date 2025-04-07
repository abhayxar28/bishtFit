import { NextResponse } from "next/server";
import prisma from "@/db/index";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const existingAdmin = await prisma.admin.findUnique({ where: { email } });

    if (existingAdmin) {
      return NextResponse.json({ error: "Admin already exists." }, { status: 409 });
    }

    const newAdmin = await prisma.admin.create({
      data: { email, password }, 
    });

    return NextResponse.json({ success: true, admin: newAdmin }, { status: 201 });
  } catch (error) {
    console.error("Error adding admin:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
