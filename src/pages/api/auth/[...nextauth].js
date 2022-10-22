import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {},
      authorize: (credentials, req) => {
        const {email , password} = credentials;

        if(email !== process.env.LOGIN || password !== process.env.PASSWORD) {
          throw new Error('Invalid credentials')
        }
        return {
          id: '1234',
          name: 'Admin',
          email: 'admin@email.com'
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
});