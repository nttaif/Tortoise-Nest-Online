import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User } from "@/types/next-auth";
import { handleUpdateUserAction } from "@/utils/actions";
import { notification } from "antd";
import { CldImage } from "next-cloudinary";

interface IProps {
  selectedUser: User | null;
  setSelectedUser: (value: User) => void;
  isShowDialog: boolean;
  setIsShowDialog: (value: boolean) => void;
  isEditable: boolean;
}

export default function UserViewAndUpdateTable(props: IProps) {
  const {
    selectedUser,
    setSelectedUser,
    isShowDialog,
    setIsShowDialog,
    isEditable,
  } = props;

  const handleConfirm = async () => {
    const res = await handleUpdateUserAction(selectedUser);
    if (res.statusCode === 200) {
      notification.success({ message: "Cập nhật thông tin thành công" });
      setIsShowDialog(false);
    } else {
      notification.error({ message: "Cập nhật thất bại, thử lại sau!" });
    }
  };

  return (
    <Dialog open={isShowDialog} onOpenChange={setIsShowDialog}>
      <DialogContent className="w-[90%] max-w-3xl p-6 rounded-lg shadow-lg bg-white mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-gray-700 text-center">
            {isEditable ? "Chỉnh sửa thông tin người dùng" : "Thông tin người dùng"}
          </DialogTitle>
        </DialogHeader>

        {selectedUser ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
                {!selectedUser?.image ? (
                  <span className="text-3xl font-semibold text-white flex items-center justify-center h-full">
                    {selectedUser.name?.charAt(0).toUpperCase()}
                  </span>
                ) : (
                  <CldImage
                    src={selectedUser.image}
                    width={128}
                    height={128}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* User Fields */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">ID:</label>
                <p className="text-gray-800">{selectedUser._id}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Họ và tên:</label>
                <input
                  type="name"
                  className="w-full border rounded p-2"
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
                  disabled={!isEditable}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Email:</label>
                <input
                  type="email"
                  className="w-full border rounded p-2"
                  value={selectedUser.email}
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Vai trò:</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={selectedUser.role}
                  onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
                  disabled={!isEditable}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Số điện thoại:</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  value={selectedUser.phoneNumber}
                  onChange={(e) => setSelectedUser({ ...selectedUser, phoneNumber: e.target.value })}
                  disabled={!isEditable}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Ngày sinh:</label>
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                    value={selectedUser.dateOfBirth}
                    onChange={(e) =>
                      setSelectedUser({ ...selectedUser, dateOfBirth: e.target.value })
                    }
                    disabled={!isEditable}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Tuổi:</label>
                  <input
                    type="number"
                    className="w-full border rounded p-2"
                    value={selectedUser.age}
                    onChange={(e) =>
                      setSelectedUser({ ...selectedUser, age: parseInt(e.target.value) })
                    }
                    disabled={!isEditable}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Giới thiệu cá nhân:</label>
                <textarea
                  className="w-full border rounded p-2"
                  value={selectedUser.biography}
                  onChange={(e) => setSelectedUser({ ...selectedUser, biography: e.target.value })}
                  disabled={!isEditable}
                />
              </div>
            </div>

            {/* Account Info */}
            <div className="col-span-2 flex flex-col gap-2">
              <p className="font-semibold text-gray-600">Loại tài khoản: {selectedUser.accountType}</p>
              <p className="font-semibold text-gray-600">Ngày tạo: {selectedUser.createdAt}</p>
              <p className="font-semibold text-gray-600">Cập nhật gần nhất: {selectedUser.updatedAt}</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Không tìm thấy thông tin người dùng.</p>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => setIsShowDialog(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-200"
          >
            Huỷ
          </button>
          {isEditable && (
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
              Xác nhận
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
