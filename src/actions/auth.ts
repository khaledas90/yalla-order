import { Environments } from "@/constants/enums";
import { db } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { SessionStrategy } from "next-auth";
export const AuthOptions = {
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  debugger: process.env.NODE_ENV === Environments.DEV,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: (credentials) => {
        const user = credentials;
        return {
          id: crypto.randomUUID(),
          ...user,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  page: {
    signIn: "/login",
  },
};
