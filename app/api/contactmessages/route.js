import connectDB from "@/lib/db";
import Contact from "@/models/contactSchema";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const data = await Contact.find({});
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error submitting message' });
  }
}