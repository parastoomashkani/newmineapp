import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const {name,lastname,username ,email, password,phone } = await request.json();
    // validate email and password
    console.log({name,lastname,username, email, password,phone });

    const hashedPassword = await hash(password, 10);

    const response = await sql`
      INSERT INTO users (name, lastname, username, email, password,phone )
      VALUES (${email}, ${hashedPassword})
    `;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
};