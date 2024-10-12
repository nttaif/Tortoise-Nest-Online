import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { handleCreateUserAction } from '@/utils/actions';
import { User } from '@/types/next-auth';
import { message, notification } from 'antd';
interface IProps{
    isCreate:boolean
    setIsCreate:(value:boolean)=>void
}

export default function UserCreateTable(props:IProps) {
    const {isCreate,setIsCreate}=props;
    const handleCloseCreate = async () => {
        setIsCreate(false)
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form
        const data = new FormData(e.currentTarget);
         // Tạo đối tượng User từ dữ liệu trong form
         const newUser:User = {
            name: data.get('name') as string,
            email: data.get('email') as string,
            password: data.get('password') as string, // Cần xem xét bảo mật
            dateOfBirth: data.get('dateOfBirth') as string, // Thay đổi kiểu dữ liệu nếu cần
            biography: data.get('biography') as string,
            phoneNumber: data.get('phoneNumber') as string,
        };
        console.log('Response:', newUser);
        const res = await handleCreateUserAction(newUser);
        console.log('>>>>>>>>>>>Response:', res);
        if(res.statusCode===201){
            setIsCreate(false)
        }else if(res.statusCode===400){
            notification.error({
                message:"Tạo người dùng thất bại",
                description: "Thông tin không hợp lệ"
            })
        }
    }
  return (
    <Dialog open={isCreate} onOpenChange={setIsCreate}>
                    <DialogContent className="max-w-lg mx-auto p-6 rounded-lg shadow-lg bg-white">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-gray-700">
                                Tạo người dùng
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={onSubmit} >
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="col-span-2 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                                        <span className="text-3xl font-semibold text-white">
                                            {"Tai".charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                               <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Họ và tên:</p>
                                    <input
                                        name='name'
                                        type="text"
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Email:</p>
                                    <input
                                        name='email'
                                        type="email"
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Mật khẩu:</p>
                                    <input
                                        name='password'
                                        type="password"
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Số điện thoại:</p>
                                    <input
                                        name='phoneNumber'
                                        type="text"
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Ngày sinh</p>
                                    <input
                                        name='dateOfBirth'
                                        type="text"
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Tuổi</p>
                                    <input
                                        name='age'
                                        type="text"
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Giới thiệu cá nhân</p>
                                    <input
                                        name='biography'
                                        type="text"
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                            </div>
                        <div className="flex justify-end gap-4 mt-6">
                                <div className="flex justify-end gap-4 mt-6">
                                    <button
                                        onClick={() => handleCloseCreate()}
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                        Huỷ
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                        Xác nhận
                                    </button>
                                </div>
                        </div>
                        </form>
            </DialogContent>
        </Dialog>
  )
}
