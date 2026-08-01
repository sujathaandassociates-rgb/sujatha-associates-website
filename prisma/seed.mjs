import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const { DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

if (!DATABASE_URL || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
  throw new Error(
    "DATABASE_URL, ADMIN_EMAIL, and ADMIN_PASSWORD must be set before seeding an admin.",
  );
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: DATABASE_URL }),
});

try {
  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 12);
  const email = ADMIN_EMAIL.trim().toLowerCase();

  await prisma.admin.upsert({
    where: { email },
    update: { hashedPassword },
    create: {
      email,
      hashedPassword,
      name: "Administrator",
    },
  });

  console.log(`Admin account provisioned for ${email}.`);
} finally {
  await prisma.$disconnect();
}
