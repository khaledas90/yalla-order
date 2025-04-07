import { db } from "@/lib/prisma";
import { login } from "@/actions/auth";
import { User } from "@/types/user";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { SessionStrategy } from "next-auth";
import { Environments } from "@/constants/enums";

export const AuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === Environments.DEV,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const res = await login(credentials.email, credentials.password);

        if (res.status === 200 && res.user) {
          return { id: (res.user as User).id.toString(), ...res.user };
        }
        return null;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user && "id" in user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session && session.user && "id" in session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};
