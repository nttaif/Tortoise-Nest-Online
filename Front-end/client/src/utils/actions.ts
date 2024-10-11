'use server'
import { signIn } from "@/auth";

//call to server
//server returns response and we return to client
export async function authenticate(username: string, password: string) {
  try {
    const r = await signIn("credentials", {
      username: username,
      password: password,
      // callbackUrl: "/login",
      redirect: false,
    });
    return r;
  } catch (error: unknown) {
    // Sử dụng kiểm tra loại để đảm bảo error có thuộc tính 'name' và 'type'
    if (error instanceof Error && error.name === "InvalidEmailPasswordError") {
      return {
        error: error.name,
        code: 1
      };
    } else if (error instanceof Error && error.name === "InActiveAccountError") {
      return {
        error: error.name,
        code: 2
      };
    } else {
      return {
        error: 'Internal server error',
        code: 0
      };
    }
  }
}
