import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_APP_API_URL}/auth/api/login/`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );
          const { access, refresh } = response.data;

          if (access && refresh) {
            return { accessToken: access, refreshToken: refresh };
          }
          return null;
        } catch (error) {
          console.error("Error logging in:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      // Remove the token refresh logic to prevent automatic expiration
      // const shouldRefreshTime = Math.round((token.exp - 60 * 60) * 1000); // 1 hour before expiry
      // if (Date.now() > shouldRefreshTime) {
      //   try {
      //     const response = await axios.post(
      //       `${process.env.NEXT_APP_API_URL}/auth/api/refresh/`,
      //       {
      //         refresh: token.refreshToken,
      //       }
      //     );
      //     const { access } = response.data;
      //     token.accessToken = access;
      //   } catch (error) {
      //     console.error("Error refreshing access token:", error);
      //   }
      // }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };