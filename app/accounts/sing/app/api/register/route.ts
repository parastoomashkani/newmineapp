import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import axios from "axios";
export async function POST(req: Request) {

  try {
    const { name, phone, password } = await req.json();
    const customApiResponse = await axios.post("https://your-custom-api-endpoint", {
      name,
      phone,
      // Include any other data you need
    });

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, phone, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
