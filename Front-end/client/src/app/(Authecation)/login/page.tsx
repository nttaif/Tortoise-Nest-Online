'use client'
import React, { useState } from 'react'
import { authenticate } from '@/utils/actions';
import { Input, Modal, notification, Steps } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { sendRequest } from '@/utils/api';
export default function Page() {
    // State để lưu giá trị của email và password
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [_idUser, setidUser] = useState('');
    const [current, setCurrent] = useState(0);
    const onFinish = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định (reload trang)
    const res = await authenticate(username,password)
    if(res?.error){
      //error
      notification.error({
        message:"Đăng nhập thất bại",
        description:res?.error
      })
      if(res?.code===2){
        //yeeu caauf xac thuc nguoi dung
        setIsModalOpen(true);
      }
    }else{
      router.push('/')
    }

    
    console.log('>>>check res in login----login form is submit: ',res)
  };
  const onFinishSteps0=async()=>{
    const verifyRes = await sendRequest<IBackendRes<any>>({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/re-verify`,
      body: {
        email:username
      }
    });
    if (verifyRes?.data) {
      setidUser(verifyRes?.data)
      setCurrent(1)
    } else {
      notification.error({
        message: "Lỗi kết nối đến server",
        description: verifyRes?.message
      });
    }
  }
  const onFinishSteps1 = async () => {
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
      setCurrent(2)
    } else {
      notification.error({
        message: "Xác thực không thành công",
        description: verifyRes?.message
      });
    }
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome back to TNO</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={onFinish} className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2  ">
          <input  onChange={(e) => setUsername(e.target.value)}  id="email" name="email" type="email" placeholder='Enter your email ' autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 "></input>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div className="mt-2">
          <input  onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder='Enter your password' type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 "></input>
        </div>
        
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
      <section className='flex flex-col mt-2 items-center ' >
          <div className="h-full w-fit text-sm ml-[260px] ">
            <a href="" className="font-semibold text-indigo-600 hover:text-indigo-500 ">Forgot password?</a>
          </div>
          <div className='h-fit w-fit mt-12 ' >
          <p className="text-sm text-gray-500">
          Not a member?
          <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register</a>
        </p>
        </div>
        </section>
    </form>
  </div>
    {/* Popup Modal for Verification */}
    <Modal title="Xác thực tài khoản" open={isModalOpen}  footer={null} onCancel={() => setIsModalOpen(false)}>
        <Steps
        current={current}
        items={[
          {
            title: 'Login',
            // status: 'finish',
            icon: <UserOutlined />,
          },
          {
            title: 'Verification',
            // status: 'finish',
            icon: <SolutionOutlined />,
          },
          {
            title: 'Done',
            // status: 'wait',
            icon: <SmileOutlined />,
          },
        ]}/>    
        {current===0 &&
        
        <div className='mt-5'>
          <p>Tài khoản của bạn chưa được kích hoạt</p>
          <Input disabled type="email" placeholder="Email" value={username}/>
          <Button variant="btn_home" className='bg-cyan-800 mt-5 text-white rounded-xl' onClick={onFinishSteps0}>
            Next
          </Button>
        </div>}
        {current===1 &&
        
        <div className='mt-5'>
          <p>Nhập mã xác thực được gửi đến email của bạn</p>
          <Input
            placeholder="Nhập mã xác thực"
            value={verificationCode}
            required
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <Button variant="btn_home" className='bg-cyan-800 mt-5 text-white rounded-xl' onClick={onFinishSteps1}>
            Next
          </Button>
        </div>}
        {current===2 &&
        <div className='mt-5'>
        <p>Tài khoản của bạn đã được kích hoạt! Vui lòng đăng nhập lại</p>
        <Input disabled type="email" placeholder="Email" value={username}/>
        <Button variant="btn_home" className='bg-cyan-800 mt-5 text-white rounded-xl' onClick={()=>setIsModalOpen(false)}>
          Next
        </Button>
      </div>}
        {/* <Input
          placeholder="Nhập mã xác thực"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        /> */}
      </Modal>
</div>
  )
}
