"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Textarea } from "@/components/ui/textarea";
import { Courses, Lesson, UploadUrlData, User } from "@/types/next-auth";
import { notification } from "antd";
import { createMultipleLessons, handleCreateCourses } from "@/utils/actions";
interface IProp {
  listLecturer: User[];
  resUploadImage: UploadUrlData;
}
export default function AddCoursesTable(props: IProp) {
  const { listLecturer, resUploadImage } = props;
  const [courses, setCourses] = useState<Courses>();
  const [listLesson, setListLesson] = useState<Lesson[]>([]);
  const [showButtons, setShowButtons] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const handleDeleteImage = () => {
    setCourses({ ...courses, image: "/images/default.jpg" }); // Đường dẫn đến ảnh mặc định
  };

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setCourses({ ...courses, image: URL.createObjectURL(file) });
      setSelectedImage(file);
    }
  };
  const addLesson = () => {
    const newLesson: Lesson = {
      _idCourses: "",
      content: "",
      category: "",
      isPublic: false,
      point: 0,
      view: 0,
    };
    setListLesson((prevLessons) => [...prevLessons, newLesson]);
  };

  const handleOnChangeDataLesson = (
    index: number,
    field: keyof Lesson,
    value: any
  ) => {
    setListLesson((prevLessons) =>
      prevLessons.map((lesson, i) =>
        i === index ? { ...lesson, [field]: value } : lesson
      )
    );
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("api_key", resUploadImage.api_key);
    formData.append("timestamp", resUploadImage.timestamp.toString());
    formData.append("signature", resUploadImage.signature);
    try {
      const cloudinaryRes = await fetch(resUploadImage.url, {
        method: "POST",
        body: formData,
      });
      if (!cloudinaryRes.ok) throw new Error("Upload to Cloudinary failed");
      const cloudinaryData = await cloudinaryRes.json();
      const imageUrl = cloudinaryData.secure_url;
      if (!imageUrl) throw new Error("Failed to retrieve image URL from Cloudinary");
      const resUploadCourses = await handleCreateCourses({ ...courses,image:imageUrl});
      if (resUploadCourses.statusCode === 201) {  
        const iDNewCourses= resUploadCourses.data.course_id
        const listLessons = listLesson.map(lesson => ({
          ...lesson,
          _idCourses: resUploadCourses.data.course_id, // Gán courseId vào từng lesson
        }));
        const normalizedLessons = listLessons.map(lesson => ({
          ...lesson,
          isPublic: typeof lesson.isPublic === "string" ? lesson.isPublic === "True" : !!lesson.isPublic,
        }));
        const resUploadLessons = await createMultipleLessons(normalizedLessons);
        if(resUploadLessons?.statusCode === 201){
          console.log("Success add lesson")
        }else{
          console.log("Failed add lesson")
        }
        notification.success({
          message: `Thêm khoá học mới thành công!`,
          description: `ID = ${iDNewCourses}`
        });
      } else {
        notification.error({
          message: 'Vui lòng thử lại sau!',
          description:`${resUploadCourses.message}`
        });
      }
    } catch (error) {
      console.error("Error during course and lessons creation:", error);
      notification.error({
        message: "Đã có lỗi xảy ra trong quá trình thực hiện!",
      });
    }
  };

  const deleteRow = (index: number) => {
    setListLesson(listLesson.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full gap-1 btn shadow-[9px_9px_0_rgb(0,0,0)] duration-700 hover:shadow-[0_0_0px_rgb(0,0,0)] hover:duration-700 text-black bg-white ease-out hover:translate-y-0 transition-all rounded">
          Thêm khoá học mới
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-slate-50 sm:max-w-[800px] p-6 rounded-md shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-gray-800 mb-4">
              Thêm khoá học mới
            </AlertDialogTitle>
            <div className="flex">
              <div className="mb-4 mr-5 w-full">
                <label className="text-sm font-semibold text-gray-600">
                  Tiêu đề
                </label>
                <Input
                  value={courses?.name}
                  className="w-full border-gray-300 rounded-md mt-1"
                  placeholder="Nhập tiêu đề cho khoá học"
                  onChange={(e) => {
                    setCourses({ ...courses, name: e.target.value });
                  }}
                />
              </div>
              <div
                className="relative w-[150px]"
                onMouseEnter={() => setShowButtons(true)}
                onMouseLeave={() => setShowButtons(false)}
              >
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={courses?.image}
                    width={1000}
                    height={1000}
                    alt="Image"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                {showButtons && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                    <button
                      onClick={handleDeleteImage}
                      className="text-white bg-red-500 p-2 rounded-full m-1"
                    >
                      Xóa
                    </button>
                    <label
                      htmlFor="imageUpload"
                      className="text-white bg-blue-500 p-2 rounded-full m-1 cursor-pointer"
                    >
                      Sửa
                    </label>
                    <input
                      id="imageUpload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                )}
              </div>
            </div>
            <Tabs defaultValue="content" className="mt-6">
              <TabsList className="space-x-2 mb-4">
                <TabsTrigger
                  value="content"
                  className="px-3 py-2 font-semibold text-gray-600 rounded-lg hover:bg-gray-200"
                >
                  Nội dung
                </TabsTrigger>
                <TabsTrigger
                  value="description"
                  className="px-3 py-2 font-semibold text-gray-600 rounded-lg hover:bg-gray-200"
                >
                  Mô tả
                </TabsTrigger>
                <TabsTrigger
                  value="option"
                  className="px-3 py-2 font-semibold text-gray-600 rounded-lg hover:bg-gray-200"
                >
                  Tuỳ chọn
                </TabsTrigger>
                <TabsTrigger
                  value="point"
                  className="px-3 py-2 font-semibold text-gray-600 rounded-lg hover:bg-gray-200"
                >
                  Điểm
                </TabsTrigger>
              </TabsList>
              <TabsContent value="content">
                <Table className="bg-white shadow-md rounded-md">
                  <TableCaption className="font-semibold text-gray-700">
                    Danh sách các bài học
                  </TableCaption>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="w-[150px] text-gray-700 font-medium">
                        Tiêu đề
                      </TableHead>
                      <TableHead className="text-gray-700 font-medium">
                        Danh mục
                      </TableHead>
                      <TableHead className="text-gray-700 font-medium">
                        Tổng lượt xem
                      </TableHead>
                      <TableHead className="text-right text-gray-700 font-medium">
                        Đã công bố
                      </TableHead>
                      <TableHead className="text-right text-gray-700 font-medium">
                        Xóa
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {listLesson.map((lesson, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Input
                            className="w-full border-gray-300 rounded-md"
                            placeholder="Nhập tiêu đề"
                            value={lesson.content}
                            onChange={(e) =>
                              handleOnChangeDataLesson(
                                index,
                                "content",
                                e.target.value
                              )
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Select
                            value={lesson.category}
                            onValueChange={(value) =>
                              handleOnChangeDataLesson(index, "category", value)
                            }
                          >
                            <SelectTrigger className="w-[120px] border-gray-300 rounded-md">
                              <SelectValue placeholder="Thể loại" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lesson">Bài học</SelectItem>
                              <SelectItem value="test">Kiểm tra</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>{lesson.view}</TableCell>
                        <TableCell>
                          <Select
                            value={lesson.isPublic}
                            onValueChange={(value) =>
                              handleOnChangeDataLesson(index, "isPublic", value)
                            }
                          >
                            <SelectTrigger className="w-[120px] border-gray-300 rounded-md">
                              <SelectValue placeholder="Công bố" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="True">True</SelectItem>
                              <SelectItem value="False">False</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <button
                            onClick={() => deleteRow(index)}
                            className="text-red-500"
                          >
                            Xóa
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center text-blue-600 cursor-pointer py-2 font-medium hover:text-blue-800"
                        onClick={addLesson}
                      >
                        Thêm mục
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              {/* description */}
              <TabsContent value="description">
                <Textarea
                  value={courses?.description}
                  onChange={(e) => {
                    setCourses({ ...courses, description: e.target.value });
                    console.log(courses);
                  }}
                />
              </TabsContent>
              {/* option */}
              <TabsContent value="option">
                <div className="flex">
                  <div>Nguời phụ trách:</div>
                  <Select
                    value={courses?._idLecture}
                    onValueChange={(e) => {
                      setCourses({ ...courses, _idLecture: e });
                      console.log(courses);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Chọn người phụ trách" />
                    </SelectTrigger>
                    <SelectContent>
                      {listLecturer.map((lecturer, index) => (
                        <SelectItem
                          key={lecturer._id}
                          value={lecturer._id ?? ""}
                        >
                          {lecturer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="ml-12">Thể loại khoá học:</div>
                  <Select
                    value={courses?.category}
                    onValueChange={(e) => {
                      setCourses({ ...courses, category: e });
                      console.log(courses);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Chọn thể loại" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"Technology"}>Công nghệ</SelectItem>
                      <SelectItem value={"Economy"}>Kinh tế</SelectItem>
                      <SelectItem value={"Education"}>Giáo dục</SelectItem>
                    </SelectContent>
                  </Select> 
                </div>
              </TabsContent>
              <TabsContent value="point">Cooming soon</TabsContent>
            </Tabs>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-end space-x-4">
            <AlertDialogCancel
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => {
                setListLesson([]);
              }}
            >
              Huỷ
            </AlertDialogCancel>
            <AlertDialogAction
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={handleSubmit}
            >
              Xác nhận
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
