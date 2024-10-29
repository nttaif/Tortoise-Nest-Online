'use client'
import { sendRequest } from '@/utils/api';
import { Input, message, Modal, notification } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Page() {

  const router = useRouter();
  const [name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [_idUser, set_idUser] = useState(''); 

  const validatePassword = (password:string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 6;
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars && isValidLength;
  };
  const onFinish=async(e: React.FormEvent)=>{
    e.preventDefault();
    //logic validation đăng kí
    // Validation
    if (!validatePassword(password)) {
      notification.error({
        message: "Mật khẩu không hợp lệ",
        description: "Mật khẩu phải có ít nhất 6 ký tự, ít nhất một ký tự in hoa, một số và một ký tự đặc biệt."
      });
      return;
    }

    if (password !== rePassword) {
      notification.error({
        message: "Mật khẩu không khớp",
        description: "Mật khẩu và nhập lại mật khẩu không khớp."
      });
      return;
    }
    //gọi API
    const res = await sendRequest<IBackendRes<any>>({
      method:'POST',
      url:`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
      body:{
        email:email,
        password:password,
        name:name
      }
    })
    //send email
    if(res?.data){
      set_idUser(res?.data?._id)
      setIsModalOpen(true);
    }else{
      notification.error({
        message:"Đăng kí không thành công",
        description:res?.message
      })
    }
  };
  const handleVerifyCode = async () => {
    //Gọi API để xác thực mã
    const verifyRes = await sendRequest<IBackendRes<any>>({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/verify`,
      body: {
        _id:_idUser,  // ID từ kết quả đăng kí
        verificationCode: verificationCode
      }
    });
    if (verifyRes?.data) {
      notification.success({
        message: "Xác thực thành công",
        description: "Tài khoản của bạn đã được xác thực"
      });
      setIsModalOpen(false);  //Đóng modal
      router.push('/login');  //Chuyển hướng sau khi xác thực thành công
    } else {
      notification.error({
        message: "Xác thực không thành công",
        description: verifyRes?.message
      });
    }
  };


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome back to TNO</h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={onFinish} action="#" method="POST">
      <div>
          <label htmlFor="name"  className="block text-sm font-medium leading-6 text-gray-900">Họ và tên</label>
          <div className="mt-2  ">
            <input  id="name" name="name" type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Nhập tên của bạn ' autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 "></input>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Địa chỉ email</label>
          <div className="mt-2  ">
            <input  id="email" name="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Nhập email của bạn ' autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 "></input>
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password"  className="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
          </div>
          <div className="mt-2">
            <input id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Nhập mật khẩu của bạn' type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 "></input>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="re-password" className="block text-sm font-medium leading-6 text-gray-900">Nhập lại mật khẩu</label>
          </div>
          <div className="mt-2">
            <input id="re-password" name="password" onChange={(e)=>{setRePassword(e.target.value)}} placeholder='Nhập lại mật khẩu của bạn' type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 "></input>
          </div>
        </div>
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
        <section className='flex flex-col mt-2 items-center ' >
            <div className='h-fit w-fit mt-3 ' >
            <p className="text-sm text-gray-500">
            Not a member?
            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login</a>
          </p>
          </div>
          </section>
      </form>
    </div>
     {/* Popup Modal for Verification */}
     <Modal title="Xác thực tài khoản" open={isModalOpen} onOk={handleVerifyCode} onCancel={() => setIsModalOpen(false)}>
        <p>Nhập mã xác thực được gửi đến email của bạn</p>
        <Input
          placeholder="Nhập mã xác thực"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </Modal>
  </div>
  )
}
