'use server'
import { auth, signIn } from "@/auth";
import { sendRequest } from "./api";
import { revalidateTag } from "next/cache";
import { Courses, Lesson, User } from "@/types/next-auth";
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

 export async function handleDeleteUserAction(data:any) {
    const session = await auth();
    const res = await sendRequest<IBackendRes<any>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/${data}`,
      method: 'DELETE',
      headers:{
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    })
    revalidateTag("list-user")
    return res;
 }

 export async function handleUpdateUserAction(data:User) {
  const session = await auth();
  console.log(">>>check data server: ",data)
  const res = await sendRequest<IBackendRes<any>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`,
    method: 'PATCH',
    headers:{
      Authorization: `Bearer ${session?.user.access_token}`,
    },
    body:{
      _id:data._id,
      name: data.name,
      role: data.role,
      phoneNumber:data.phoneNumber,
      age: data.age,
      dateOfBirth: data.dateOfBirth,
      biography:data.biography
    }

  })
  revalidateTag("list-user")
  return res;
}

//upload image to cloudinary 
export async function handlerUrlUploadImage() {
  const session = await auth();
  const res = await sendRequest<IBackendRes<any>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/upload/presigned-url`,
    method: 'GET',
    headers:{
      Authorization: `Bearer ${session?.user.access_token}`,
    },
  })
  return res;
}

//create courses
export async function handleCreateCourses(course?:Courses) {
  const session = await auth();
  const res = await sendRequest<IBackendRes<any>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/courses`,
    method:'POST',
    headers:{
      Authorization: `Bearer ${session?.user.access_token}`,
    },
    body:{
      ...course
    }
  })
  return res;
}

export async function createMultipleLessons(lessonsArray:Lesson[]) {
  const session = await auth();
  try {
    console.log("Is array:", Array.isArray(lessonsArray));
    const response = await sendRequest<IBackendRes<any>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/lesson/mutipleLesson`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
        'content-type': 'application/json',
      },
      body: { lessons: lessonsArray },
    });
    console.log("Check response: ",response )
    return response
  } catch (error) {
    console.error("Error:", error);
  }
};
