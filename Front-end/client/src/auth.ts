import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { sendRequest } from "./utils/api"
import { InActiveAccountError, InvalidEmailPasswordError } from "./utils/errors"
import { IUser } from "./types/next-auth"
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "Client/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.user = (user as IUser);
      }
      return token
    },
    session({ session, token }) {
      (session.user as IUser) = token.user
      return session
    },
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        //call API backend
        const res = await sendRequest<IBackendRes<ILogin>>({
          method:'POST',
          url:'http://localhost:8080/api/v1/auth/login',
          body:{
            username:credentials.email,
            password:credentials.password
          }
        })
        if(!res.statusCode){
          return {
            _id:res.data?.user._id,
            name:res.data?.user._id,
            email:res.data?.user._id,
            access_token:res.data?.access_token,

          }
        }else
        //sai pass 401
        //not activity 400
        if(+res.statusCode===401){
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