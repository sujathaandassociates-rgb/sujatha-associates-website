import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { getPrisma } from "@/lib/prisma";
import { COOKIE_NAME, getJwtSecret } from "@/lib/session";

export interface SessionUser {
  id: string;
  email: string;
  name: string;
}

export async function createSession(user: SessionUser) {
  const token = await new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(getJwtSecret());

  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
}

export async function getSession(): Promise<SessionUser | null> {
  try {
    const store = await cookies();
    const token = store.get(COOKIE_NAME)?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, getJwtSecret());
    const user = payload.user as SessionUser | undefined;
    return user || null;
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function verifyCredentials(email: string, password: string) {
  const admin = await getPrisma().admin.findUnique({
    where: { email: email.trim().toLowerCase() },
  });

  if (!admin || !(await bcrypt.compare(password, admin.hashedPassword))) {
    return null;
  }

  return { id: admin.id, email: admin.email, name: admin.name };
}
