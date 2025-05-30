/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { socialLogin } from "@/app/lib";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials: any, req) {
        console.log("CREDENTIALS", credentials);
        return {
          ...credentials,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("SIGNIN", { user, account, profile });
      return true;
    },

    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },

    async jwt({ token, user, account, profile }) {
      console.log("JWT CALLBACK", { token, user, account, profile });

      if (account?.provider === "google") {
        try {
          const res = await socialLogin({
            email: token.email as string,
            name: token.name as string,
            avatar: (token as any).picture || "",
          });

          return {
            ...token,
            accessToken: res.data.accessToken,
            refreshToken: res.data.refresh_token,
            role: "admin",
            redirect: false,
            access: ["create", "read", "update", "delete"],
            id: res.data.id,
          };
        } catch (err) {
          console.error("SOCIAL LOGIN ERROR", err);
          return {
            ...token,
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
            role: "guest",
            id: account.providerAccountId,
          };
        }
      }

      // Untuk GitHub & Credentials
      return {
        ...token,
        ...user,
      };
    },

    async session({ session, token }) {
      session.user.id = Number(token.id);
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      session.user.accessToken = token.accessToken as string;
      session.user.refreshToken = token.refreshToken as string;
      session.user.role = token.role as string;
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/error",
  },
};

export default NextAuth(authOptions);
