import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import axios from "axios"; // Import Axios or your preferred HTTP client

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { phone, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ phone });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          // Additional API call example (replace with your own logic)
          const apiResponse = await axios.post("http://127.0.0.1:8000/api", {
          phone: user.phone,
            // Include any other data you need
          });

          // Check the API response and decide whether to allow authentication
          if (apiResponse.data.success){
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


