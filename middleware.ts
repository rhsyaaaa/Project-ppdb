import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { axiosClient } from "./lib/axiosClient";

export default withAuth(
  function middleware(req: any) {
    console.log("token", req.nextauth.token);
    console.log("middleware berjalan");

    const token = req.nextauth.token;

    const role = token.role;
    const access = token.access;

    const updateBook = `/Book/${req.nextUrl.pathname.split("/")[2]}/update`;
    if (
      req.nextUrl.pathname.startsWith("/Book/tambah") &&
      (role !== "admin" || !access.includes("create"))
    ) {
      return NextResponse.redirect(new URL("/access", req.url));
    }

    if (
      req.nextUrl.pathname.startsWith(updateBook) &&
      (role !== "admin" || !access.includes("update"))
    ) {
      return NextResponse.redirect(new URL("/access", req.url));
    }

    

    
    if (
      req.nextUrl.pathname.startsWith("/Book") &&
      !req.nextUrl.pathname.startsWith("/Book/tambah") &&
      !req.nextUrl.pathname.startsWith("/Book/update") &&
      role === "user"
    ) {
      return NextResponse.next();
    }

    
    if (
      req.nextUrl.pathname.startsWith("/Book") &&
      role === "user" &&
      (req.nextUrl.pathname.startsWith("/Book/tambah") ||
        req.nextUrl.pathname.startsWith("/Book/update"))
    ) {
      return NextResponse.redirect(new URL("/access", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (token) return true;
        return false;
      },
    },
    pages: {
      signIn: "/auth/Login",
      error: "/api/auth/error",
    },
  }
);

export const config = { matcher: [
  "/admin","/admin/:path*",
  "/Book", "/Book/:path*",
  // "/dashboard", "/dashboard/:path*",

] 
};