'use server'
import { auth, signIn } from "@/auth";
import { sendRequest } from "./api";
import { revalidateTag } from "next/cache";

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
        error:  'Sai tên đăng nhập hoặc mật khẩu!',
        code: 1
      };
    } else if (error instanceof Error && error.name === "InActiveAccountError") {
      return {
        error: 'Tài khoản chưa được kích hoạt vui lòng kích hoạt tài khoản!',
        code: 2
      };
    } else {
      return {
        error: 'Lỗi kết nối đến server vui lòng thử lại sau!',
        code: 0
      };
    }
  }
}
export async function handleCreateUserAction(data:any) {
  const session = await auth();
  const res = await sendRequest<IBackendRes<any>>({
    url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`,
    method:"POST",
    headers:{
      Authorization: `Bearer ${session?.user.access_token}`,
    },
    body:{
      ...data
    }
  })
  revalidateTag("list-user")
  return res;
}