import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { handleCreateUserAction } from "@/utils/actions";
import { UploadUrlData, User } from "@/types/next-auth";
import { notification } from "antd";
import ImageUpload from "@/components/popular/ImageUpload";
import { CldImage } from "next-cloudinary";

interface IProps {
  isCreate: boolean;
  setIsCreate: (value: boolean) => void;
  resUpload: UploadUrlData;
}

export default function UserCreateTable(props: IProps) {
  const [isUpload, setIsUpload] = useState(false);
  const [urlUpload, setUrlUpload] = useState("");
  const { isCreate, setIsCreate, resUpload } = props;

  const handleCloseCreate = () => setIsCreate(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const newUser: User = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
      image:urlUpload,
      dateOfBirth: data.get("dateOfBirth") as string,
      biography: data.get("biography") as string,
      phoneNumber: data.get("phoneNumber") as string,
    };

    const res = await handleCreateUserAction(newUser);

    if (res.statusCode === 201) {
      setIsCreate(false);
    } else if (res.statusCode === 400) {
      notification.error({
        message: "Tạo người dùng thất bại",
        description: "Thông tin không hợp lệ",
      });
    }
  };

  return (
    <Dialog open={isCreate} onOpenChange={setIsCreate}>
      <DialogContent
        className="w-full max-w-xl mx-auto p-6 rounded-lg shadow-lg bg-white sm:max-w-lg lg:max-w-2xl"
      >
        {/* Dialog Header */}
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-700">
            Tạo người dùng
          </DialogTitle>
        </DialogHeader>

        {/* Image Upload Section */}
        <div className="flex justify-center my-4">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            {urlUpload === "" ? (
              <span
                onClick={() => setIsUpload(true)}
                className="text-3xl font-semibold text-white"
              >
                {"Tai".charAt(0).toUpperCase()}
              </span>
            ) : (
              <CldImage
                onClick={() => setIsUpload(true)}
                src={urlUpload}
                width={128}
                height={128}
                alt="Avatar"
                className="w-32 h-32 object-cover"
              />
            )}
          </div>
        </div>

        <ImageUpload
          isUpload={isUpload}
          setIsUpload={setIsUpload}
          uploadUrlData={resUpload}
          setUrlUpload={setUrlUpload}
        />

        {/* Form Inputs */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField label="Họ và tên:" name="name" type="text" />
            <InputField label="Email:" name="email" type="email" />
            <InputField label="Mật khẩu:" name="password" type="password" />
            <InputField label="Số điện thoại:" name="phoneNumber" type="text" />
            <InputField label="Ngày sinh:" name="dateOfBirth" type="date" />
            <InputField label="Tuổi:" name="age" type="number" />
          </div>

          <div className="mt-4">
            <p className="font-semibold text-gray-600">Giới thiệu cá nhân:</p>
            <textarea
              name="biography"
              className="w-full border rounded p-2 resize-none h-24"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={handleCloseCreate}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Huỷ
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Xác nhận
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
}

const InputField = ({ label, name, type }: InputFieldProps) => (
  <div>
    <p className="font-semibold text-gray-600">{label}</p>
    <input
      name={name}
      type={type}
      className="w-full border rounded p-2"
    />
  </div>
);
