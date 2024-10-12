'use client';
import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

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
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import UserCreateTable from './component/user.create.table';
import UserViewAndUpdateTable from './component/user.update.table';

interface IProps {
    users: User[] | [];
    meta: {
        current: number;
        pageSize: number;
        pages: number;
        total: number;
    };
}

export default function UserTable(props: IProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { users, meta } = props;
    const [isShowDialog, setIsShowDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isEditable, setIsEditable] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const handleView = (userId: string) => {
        const user = users.find(item => item._id === userId);
        if (user) {
            setSelectedUser(user);
            setIsEditable(false);
            setIsShowDialog(true);
        }
    };

    const handleEdit = (userId: string) => {
        const user = users.find(item => item._id === userId);
        if (user) {
            setSelectedUser(user);
            setIsEditable(true);
            setIsShowDialog(true);
        }
    };

    const handleDelete = (userId: string) => {
        console.log("Xóa người dùng với ID:", userId);
        setIsDelete(true);
    };

    const handleCreate = () => {
        setIsCreate(true);
    };

    const onChange = (page: number, pageSize?: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('current', page.toString());
        if (pageSize) params.set('pageSize', pageSize.toString());
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className='container mx-auto mt-10'>
            <Button variant={"btn_home"} onClick={handleCreate} className='mb-5'>Tạo người dùng</Button>
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
                                    <button onClick={() => handleView(user._id)} className="text-blue-600 hover:underline mr-2">Xem</button>
                                    <button onClick={() => handleEdit(user._id)} className="text-yellow-600 hover:underline mr-2">Sửa</button>
                                    <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:underline">Xóa</button>
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

            <AlertDialog open={isDelete} onOpenChange={setIsDelete}>
                <AlertDialogContent className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white">
                    <AlertDialogHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <AlertDialogTitle className="text-xl font-semibold text-gray-800">Bạn có chắc chắn muốn xóa?</AlertDialogTitle>
                        </div>
                    </AlertDialogHeader>

                    <AlertDialogDescription className="mt-4 text-gray-600">
                        Hành động này không thể hoàn tác. Người dùng sẽ bị xóa vĩnh viễn và toàn bộ dữ liệu liên quan cũng sẽ bị xóa khỏi hệ thống.
                    </AlertDialogDescription>

                    <AlertDialogFooter className="flex justify-end gap-4 mt-6">
                        <AlertDialogCancel className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Huỷ</AlertDialogCancel>
                        <AlertDialogAction className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Xác nhận</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            
            <UserViewAndUpdateTable selectedUser={selectedUser} isEditable={isEditable} isShowDialog={isShowDialog} setIsShowDialog={setIsShowDialog} setSelectedUser={setSelectedUser} />
            {/* Taọ user */}
            <UserCreateTable isCreate={isCreate} setIsCreate={setIsCreate} />
        </div>
    );
}
