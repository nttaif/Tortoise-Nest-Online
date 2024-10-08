import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { InActiveAccountError, InvalidEmailPasswordError } from "./utils/errors"
import { IUser } from "./types/next-auth"
import { sendRequest } from "./utils/api"
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.user = (user as IUser);
        console.log(">>>>check user in session: ",token.user)
      }
      return token
    },
    session({ session, token }) {
      (session.user as IUser) = token.user
      return session
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        //call API backend
          const res = await sendRequest<IBackendRes<ILogin>>({
            method:'POST',
            url:'http://localhost:8080/api/v1/auth/login',
            body:{
              username:credentials.username,
              password:credentials.password
            }
          })
          console.log("Full API response: ", res.data?.user._id); // Log toàn bộ phản hồi
          if(res.statusCode===201){
            return {
              email:res.data?.user.email,
              _id:res.data?.user._id,
              name:res.data?.user.name,
              access_token:res.data?.access_token,
            }
          }else if(+res.statusCode===401){
            throw new InvalidEmailPasswordError();
          }else
          if(+res.statusCode===400){
            throw new InActiveAccountError();
          }else{
            throw new Error("Internal server error");
          }
      },
    }),
  ],
 
})