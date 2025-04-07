import { DefaultUser, AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string;
  }
  interface Session {
    user: User & {
      role?: string;
    };
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        console.log("Google profile:", profile);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: "admin"
        }
      }
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.admin.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        if (credentials.password !== user.password) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          role: "admin",
        };
      },
    }),
  ],
  debug: true,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn callback - User:", user);
      console.log("SignIn callback - Account:", account);
      console.log("SignIn callback - Profile:", profile);

      if (account?.provider === "google") {
        try {
          // Check if user exists
          const existingUser = await prisma.admin.findUnique({
            where: { email: user.email! },
          });

          console.log("Existing user:", existingUser);

          // If user doesn't exist, create them as admin
          if (!existingUser) {
            const newUser = await prisma.admin.create({
              data: {
                email: user.email!,
                password: Math.random().toString(36).slice(-8), // Generate a random password
              },
            });
            console.log("Created new user:", newUser);
          }
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      console.log("JWT callback - Token:", token);
      console.log("JWT callback - User:", user);
      console.log("JWT callback - Account:", account);

      if (user) {
        token.role = "admin";
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback - Session:", session);
      console.log("Session callback - Token:", token);

      if (session.user) {
        session.user.role = "admin";
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback - URL:", url);
      console.log("Redirect callback - BaseURL:", baseUrl);
      return baseUrl + "/dashboard";
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
}; 