    import NextAuth, { NextAuthOptions } from "next-auth";
    import GithubProvider from "next-auth/providers/github";
    import GoogleProvider from "next-auth/providers/google";
    import CredentialsProvider from "next-auth/providers/credentials";
    const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET !,
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
        authorize: async (credentials: any) => {
            console.log("Credentials:", credentials);
            return { ...credentials };
        },
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
        return true;
        },

        async redirect({ url, baseUrl }) {
        return baseUrl;
        },

        async jwt({ token, user, account }) {
        if (account?.provider === "google") {
            const res = await socialLogin({
            email: token.email as string,
            name: token.name as string,
            avatar: (token as any).picture || "",
            });

            return {
            ...token,
            id: res.data.id,
            email: res.data.email,
            accessToken: res.data.access_token,
            refreshToken: res.data.refresh_token,
            role: "admin",
            redirect: false,
            access: ["create", "", "update", "delete"],
            };
        }

        // Tambahkan pengecekan untuk GitHub
            

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
        signIn: "/login",
        signOut: "/auth/login",
        error: "/auth/error",
    },
    };

    export default NextAuth(authOptions);
