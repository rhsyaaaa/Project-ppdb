        import { Session } from "next-auth";

    declare module "next-auth" {
    interface Session {
        user: {
        [key: string]: any;
        id: number | null | undefined;
        email: string | null | undefined;
        name: string | null | undefined;
        accessToken: any;
        refreshToken: any;
        token: any;
        role: string | null | undefined | any;
        };
    }
    }
