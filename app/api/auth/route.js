// app/api/auth/route.js
import NextAuth from "next-auth";
import { SequelizeAdapter } from "@next-auth/sequelize-adapter";
import sequelize from "@/src/lib/db"; // Adjust path if needed

export const authOptions = {
  providers: [
    // Add providers like Credentials, GitHub, Google, etc.
  ],
  adapter: SequelizeAdapter(sequelize),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.userId = token.sub;
      return session;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

