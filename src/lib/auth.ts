import { db } from "@/lib/prisma";
import { login, signup } from "@/actions/auth";
import { User } from "@/types/user";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { DefaultSession, NextAuthOptions } from "next-auth";
import { SessionStrategy } from "next-auth";
import { Environments } from "@/constants/enums";
import { UserRole } from "@prisma/client";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import bcrypt from "bcrypt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends Partial<User> {
    id: string;
    name: string;
    email: string;
    role: UserRole;
  }
}

export const AuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === Environments.DEV,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        if (credentials.name && credentials.email && credentials.password) {
          const res = await signup(
            credentials.name,
            credentials.email,
            credentials.password
          );
          if (res.status === 201 && res.user) {
            return { id: (res.user as User).id.toString(), ...res.user };
          }
          return null;
        }
        if (credentials.email && credentials.password) {
          const res = await login(credentials.email, credentials.password);
          if (res.status === 200 && res.user) {
            return { id: (res.user as User).id.toString(), ...res.user };
          }
          return null;
        }
        return null;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/en/login",
    error: "/en/auth/error",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" || account?.provider === "facebook") {
        const existingUser = await db.user.findUnique({
          where: { email: user.email! },
          include: { accounts: true },
        });

        if (existingUser) {
          const existingAccount = await db.account.findFirst({
            where: {
              userId: existingUser.id,
              provider: account.provider,
            },
          });

          if (!existingAccount) {
            await db.account.create({
              data: {
                userId: existingUser.id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                type: "oauth",
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
              },
            });
          }

          return true;
        } else {
          await db.user.create({
            data: {
              email: user.email!,
              name: user.name || profile?.name || `${account.provider} User`,
              image: user.image || profile?.image,
              role: UserRole.USER,
              city: null,
              country: null,
              phone: null,
              postalCode: null,
              streetAddress: null,
              password: await bcrypt.hash(
                Math.random().toString(36).slice(-8),
                10
              ),
            },
          });
          return true;
        }
      }

      // Always allow credential-based sign-in
      return true;
    },
    // Allow linking different authentication methods for the same email
    async jwt({ token, user, account }) {
      // If user is just logging in, merge the account info into the token
      if (user && account) {
        token.provider = account.provider;
      }

      const dbUser = await db.user.findUnique({
        where: {
          email: token?.email,
        },
      });

      if (!dbUser) {
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role,
        image: dbUser.image,
        city: dbUser.city,
        country: dbUser.country,
        phone: dbUser.phone,
        postalCode: dbUser.postalCode,
        streetAddress: dbUser.streetAddress,
      };
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image as string;
        session.user.country = token.country as string;
        session.user.city = token.city as string;
        session.user.postalCode = token.postalCode as string;
        session.user.streetAddress = token.streetAddress as string;
        session.user.phone = token.phone as string;
      }
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role,
          image: token.image,
        },
      };
    },
  },
};
