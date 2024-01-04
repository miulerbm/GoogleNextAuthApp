import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/**
 * Esto es lo que va a permitir comunicarnos con los servicios de Google
 */

const handler = NextAuth({
  // Con este objeto handler recibiremos peticiones GET y POST
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string, // as string para asegurar que no será undefined
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
