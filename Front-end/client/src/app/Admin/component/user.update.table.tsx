import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { User } from '@/types/next-auth';
import { handleUpdateUserAction } from '@/utils/actions';
import { notification } from 'antd';
import Image from '@/components/popular/Image';
interface IProps{
    selectedUser:User| null
    setSelectedUser:(value:User)=>void
    isShowDialog:boolean
    setIsShowDialog: (value: boolean)=>void
    isEditable:boolean
    }
    export default function UserViewAndUpdateTable(props:IProps) {
        const {selectedUser,setSelectedUser,isShowDialog,setIsShowDialog,isEditable}=props
        const handleConfirm = async () => {
            console.log("Xác nhận thay đổi:", selectedUser);
            const res = await handleUpdateUserAction(selectedUser);
            if(res.statusCode===200){
                notification.success({
                    message:"Cập nhật thông tin thành công"
                })
                setIsShowDialog(!isShowDialog);
            }else{
                notification.error({
                    message:"Cập nhật thông tin thất bại vui lòng thử lại sau!"
                })
            }
            console.log(">>>>>>>check res:", res);

        };
        
    return (
    <div>
        <Dialog open={isShowDialog} onOpenChange={setIsShowDialog}>
                    <DialogContent className="max-w-lg mx-auto p-6 rounded-lg shadow-lg bg-white">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-gray-700">
                                {isEditable ? 'Chỉnh sửa thông tin người dùng' : 'Thông tin người dùng'}
                            </DialogTitle>
                        </DialogHeader>
                        {selectedUser ? (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="col-span-2 flex items-center justify-center">
                                    <Image/>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">ID:</p>
                                    <p className="text-gray-800">{selectedUser._id}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">Họ và tên:</p>
                                    <input
                                        type="name"
                                        className="w-full border rounded p-2"
                                        value={selectedUser.name}
                                        onChange={(e) =>
                                            setSelectedUser({ ...selectedUser, name: e.target.value })
                                        }
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Email:</p>
                                    <input
                                        type="email"
                                        className="w-full border rounded p-2"
                                        value={selectedUser.email}
                                        onChange={(e) =>
                                            setSelectedUser({ ...selectedUser, email: e.target.value })
                                        }
                                        disabled={true}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Vai trò:</p>
                                    <input
                                        type="role"
                                        className="w-full border rounded p-2"
                                        value={selectedUser.role}
                                        onChange={(e) =>
                                            setSelectedUser({ ...selectedUser, role: e.target.value })
                                        }
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Số điện thoại:</p>
                                    <input
                                        type="phoneNumber"
                                        className="w-full border rounded p-2"
                                        value={selectedUser.phoneNumber}
                                        onChange={(e) =>
                                            setSelectedUser({ ...selectedUser, phoneNumber: e.target.value })
                                        }
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">Ngày sinh</p>
                                    <input
                                        type="email"
                                        className="w-full border rounded p-2"
                                        value={selectedUser.dateOfBirth}
                                        onChange={(e) =>
                                            setSelectedUser({ ...selectedUser, dateOfBirth: e.target.value })
                                        }
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">Tuổi</p>
                                    <input
                                        type="email"
                                        className="w-full border rounded p-2"
                                        value={selectedUser.age}
                                        onChange={(e) =>
                                            setSelectedUser({ ...selectedUser, age: parseInt(e.target.value) })
                                        }
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Giới thiệu cá nhân</p>
                                    <input
                                        type="bio"
                                        className="w-full border rounded p-2"
                                        value={selectedUser.biography}
                                        onChange={(e) =>
                                            setSelectedUser({ ...selectedUser, biography: e.target.value })
                                        }
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">Loại tài khoản:</p>
                                    <p className="text-gray-800">{selectedUser.accountType}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">Ngày tạo tài khoản:</p>
                                    <p className="text-gray-800">{selectedUser.createdAt}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">Ngày cập nhật gần nhất:</p>
                                    <p className="text-gray-800">{selectedUser.updatedAt}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">Không tìm thấy thông tin người dùng.</p>
                        )}

                        <div className="flex justify-end gap-4 mt-6">
                            {isEditable && (
                                <div className="flex justify-end gap-4 mt-6">
                                    <button
                                        onClick={() => setIsShowDialog(false)}
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                        Huỷ
                                    </button>
                                    <button
                                        onClick={handleConfirm}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                        Xác nhận
                                    </button>
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
    </div>
  )
}
