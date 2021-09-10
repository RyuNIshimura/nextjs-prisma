import NextAuth, { DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User | JWT;
  }

  interface User extends DefaultUser {
    id?: number | null;
    name?: string | null;
    image?: any;
  }
}
