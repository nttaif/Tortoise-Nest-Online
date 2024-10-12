'use client'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { User } from '@/types/next-auth';
import { Pagination } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
interface IProps {
    users: User[] | [];
    meta:{
        current:number,
        pageSize:number,
        pages:number,
        total:number,
    }
}

export default function UserTable(props: IProps) {
    const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
    const { users,meta} = props;
    const [isShowDialog, setIsShowDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null); // State để lưu người dùng được chọn
    const [isEditable, setIsEditable] = useState(false); // Trạng thái chỉnh sửa
    const [isDelete, setisDelete] = useState(false); // Trạng thái chỉnh sửa
    const handleView = (userId: string) => {
        // Thực hiện hành động xem người dùng
        console.log("Xem người dùng với ID:",users.find(item=>item._id===userId) );
        const user = users.find(item => item._id === userId);
        if (user) {
            setSelectedUser(user);
            setIsEditable(false); // Chế độ xem
            setIsShowDialog(true);
        }
        
    };
    const handleEdit = (userId: string) => {
        // Thực hiện hành động sửa người dùng
        const user = users.find(item => item._id === userId);
        if (user) {
            setSelectedUser(user);
            setIsEditable(true); // Chế độ chỉnh sửa
            setIsShowDialog(true);
        }
       
        
    };
    const handleConfirm = () => {
        console.log("Xác nhận thay đổi:", selectedUser);
        setIsShowDialog(false);
    };
    const handleDelete = (userId: string) => {
        // Thực hiện hành động xóa người dùng
        console.log("Xóa người dùng với ID:", userId);
        setisDelete(true);
    };
    const onChange = (page: number, pageSize?: number) => {
        const params = new URLSearchParams(searchParams.toString()); // Chuyển đổi sang mutable
        params.set('current', page.toString());
        if (pageSize) params.set('pageSize', pageSize.toString());
        // Cập nhật URL mà không reload trang
        router.replace(`${pathname}?${params.toString()}`);
      };
    return (
        <div className='container mx-auto mt-10'>
            <Table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden" key={"id"}>
                <TableCaption className="text-lg font-semibold text-gray-700">Danh sách người dùng</TableCaption>
                <TableHeader className="bg-gray-200">
                    <TableRow>
                        <TableHead className="p-4 text-left text-gray-600">ID</TableHead>
                        <TableHead className="p-4 text-left text-gray-600">Họ và tên</TableHead>
                        <TableHead className="p-4 text-left text-gray-600">Email</TableHead>
                        <TableHead className="p-4 text-left text-gray-600">Trạng thái</TableHead>
                        <TableHead className="p-4 text-left text-gray-600"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <TableRow key={user._id} className="border-b hover:bg-gray-100">
                                <TableCell className="p-4">{user._id}</TableCell>
                                <TableCell className="p-4">{user.name}</TableCell>
                                <TableCell className="p-4">{user.email}</TableCell>
                                <TableCell className="p-4">
                                    <span className={`font-semibold ${user.isActivity ? 'text-green-600' : 'text-red-600'}`}>
                                        {user.isActivity ? 'Đã kích hoạt' : 'Chưa kích hoạt'}
                                    </span>
                                </TableCell>
                                <TableCell className="p-4">
                                    <button 
                                        onClick={() => handleView(user._id)} 
                                        className="text-blue-600 hover:underline mr-2">
                                        Xem
                                    </button>
                                    <button 
                                        onClick={() => handleEdit(user._id)} 
                                        className="text-yellow-600 hover:underline mr-2">
                                        Sửa
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(user._id)} 
                                        className="text-red-600 hover:underline">
                                        Xóa
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="p-4 text-center text-gray-500">Không có dữ liệu.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex justify-end w-full mt-4">
                <Pagination
                    total={meta.total}
                    showTotal={(total) => `Tổng ${total} mục`}
                    defaultPageSize={meta.pageSize}
                    defaultCurrent={meta.current}
                    className="pagination"
                    onChange={onChange}
                />
            </div>
            <>
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
                                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                                        <span className="text-3xl font-semibold text-white">
                                            {selectedUser.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">ID:</p>
                                    <p className="text-gray-800">{selectedUser._id}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-600">Họ và tên:</p>
                                    <input
                                        type="text"
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
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-gray-600">Vai trò:</p>
                                    <input
                                        type="email"
                                        className="w-full border rounded p-2"
                                        value={selectedUser.role}
                                        onChange={(e) =>
                                            setSelectedUser({ ...selectedUser, email: e.target.value })
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
                <AlertDialog open={isDelete} onOpenChange={setisDelete}>
                    <AlertDialogContent className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white">
                        <AlertDialogHeader>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="1.5" 
                                        stroke="red" 
                                        className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <AlertDialogTitle className="text-xl font-semibold text-gray-800">
                                    Bạn có chắc chắn muốn xóa?
                                </AlertDialogTitle>
                            </div>
                        </AlertDialogHeader>

                        <AlertDialogDescription className="mt-4 text-gray-600">
                            Hành động này không thể hoàn tác. Người dùng sẽ bị xóa vĩnh viễn và toàn bộ dữ liệu liên quan cũng sẽ bị xóa khỏi hệ thống.
                        </AlertDialogDescription>

                        <AlertDialogFooter className="flex justify-end gap-4 mt-6">
                            <AlertDialogCancel className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                                Huỷ
                            </AlertDialogCancel>
                            <AlertDialogAction className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                                Xác nhận
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </>
        </div>
    )
}
