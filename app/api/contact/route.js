// api/addFaculty/[id]/route.js
import Contact from "@/models/contactSchema";
import connectDB from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();
        const { name, email,subject, message } = await req.json();
        const newContact = new Contact({ name, email,subject, message });
        await newContact.save();
        return NextResponse.json({ success: true, message: 'Message submitted successfully!' });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Error submitting message' });
      }
}

// import { connectToDatabase } from '../../lib/route.js';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, subject, message } = req.body;

//     try {
//       const db = await connectToDatabase();
//       const ContactMessage = db.model('ContactMessage', new mongoose.Schema({
//         name: String,
//         email: String,
//         subject: String,
//         message: String,
//       }));

//       const newMessage = new ContactMessage({ name, email, subject, message });
//       await newMessage.save();

//       res.status(200).json({ message: 'Message saved successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error saving message' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
