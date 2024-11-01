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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IProps {
  isCreate: boolean;
  setIsCreate: (value: boolean) => void;
  resUpload: UploadUrlData;
}

export default function UserCreateTable(props: IProps) {
  const [isUpload, setIsUpload] = useState(false);
  const [urlUpload, setUrlUpload] = useState("");
  const { isCreate, setIsCreate, resUpload } = props;
  const [selectRole, setselectRole] = useState("Users");
  const [selectAcademic, setSelectAcademic] = useState("");
  const [selectSpecialization, setSelectSpecialization] = useState("");

  const handleCloseCreate = () => setIsCreate(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let newUser: User = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
      image: urlUpload,
      dateOfBirth: data.get("dateOfBirth") as string,
      biography: data.get("biography") as string,
      phoneNumber: data.get("phoneNumber") as string,
      role: selectRole,
    };
    if (selectRole === "Lecturer") {
      newUser = {
        name: data.get("name") as string,
        email: data.get("email") as string,
        password: data.get("password") as string,
        image: urlUpload,
        dateOfBirth: data.get("dateOfBirth") as string,
        biography: data.get("biography") as string,
        phoneNumber: data.get("phoneNumber") as string,
        role: selectRole,
        inFoLecturer: {
          hireDate: data.get("hireDate") as string,
          academic: selectAcademic,
          specialization: selectSpecialization,
          rating: 0 ? parseInt(data.get("rating") as string, 10) : 0,
        },
      };
    }
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
      <DialogContent className="w-full max-w-xl mx-auto p-6 rounded-lg shadow-lg bg-white sm:max-w-lg lg:max-w-2xl">
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
            <div>
              <p className="font-semibold text-gray-600">Vai trò</p>
              <Select
                value={selectRole}
                onValueChange={(e) => {
                  setselectRole(e);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Users">Học viên</SelectItem>
                  <SelectItem value="Lecturer">Giảng viên</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {selectRole === "Lecturer" ? (
              <>
                <InputField label="Ngày thuê:" name="hireDate" type="date" />
                <div>
                  <p className="font-semibold text-gray-600">Học vị</p>
                  <Select
                    value={selectAcademic}
                    onValueChange={(e) => {
                      setSelectAcademic(e);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Chọn học vị" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TT">Tú tài</SelectItem>
                      <SelectItem value="CN">Cử nhân</SelectItem>
                      <SelectItem value="Ths">Thạc sĩ</SelectItem>
                      <SelectItem value="TS">Tiến sĩ</SelectItem>
                      <SelectItem value="PGS.TS">
                        Phó giáo sư tiến sĩ
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Lĩnh vực</p>
                  <Select
                    value={selectSpecialization}
                    onValueChange={(e) => {
                      setSelectSpecialization(e);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Chọn lĩnh vực" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technology">Công nghệ</SelectItem>
                      <SelectItem value="Economy">Kinh tế</SelectItem>
                      <SelectItem value="Education">Giáo dục</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
          <InputField
            label="Giới thiệu cá nhân:"
            name="biography"
            type="text"
          />

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
    {name === "biography" ? (
        <textarea
          name="biography"
          typeof={type}
          className="w-full border rounded p-2 resize-none h-24"
        />
    ) : (
      <input name={name} type={type} className="w-full border rounded p-2" />
    )}
  </div>
);
