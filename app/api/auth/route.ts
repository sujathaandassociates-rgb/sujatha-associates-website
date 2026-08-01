import { NextResponse } from "next/server";
import { createSession, deleteSession, verifyCredentials } from "@/lib/auth";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    const parsed: unknown = await request.json();

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  try {
    const { email, password, action } = body;

    if (action === "logout") {
      await deleteSession();
      return NextResponse.json({ success: true });
    }

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const admin = await verifyCredentials(email, password);

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    await createSession(admin);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Authentication failed." },
      { status: 500 }
    );
  }
}
