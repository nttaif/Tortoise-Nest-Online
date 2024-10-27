"use client";
import React, { ChangeEvent, useState } from "react";
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
import { Courses, Lesson, User } from "@/types/next-auth";

interface IProp{
  listLecturer:User[];
}
export default function AddCoursesTable(props:IProp) {
  const {listLecturer}=props;
  const [imageSrc, setImageSrc] = useState("/images/AILecturer.jpg");
  const [courses, setCourses] = useState<Courses>();
  const [listLesson, setListLesson] = useState<Lesson[]>([]);
  const [showButtons, setShowButtons] = useState(false);

  const handleDeleteImage = () => {
    setImageSrc("/images/default.jpg"); // Đường dẫn đến ảnh mặc định
  };

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };
  const addLesson = () => {
    const newLesson: Lesson = {
      _idCourses: "",
      content: "",
      image: "",
      category: "",
      isPublic: false,
      point: 0,
      view: 0,
    };
    setListLesson((prevLessons) => [...prevLessons, newLesson]);
    console.log("????Check lesson: ", listLesson);
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

  const deleteRow = (index: number) => {
    setListLesson(listLesson.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="bg-black text-yellow-500 py-2 px-4 rounded-md font-semibold">
          Open
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
                    console.log(courses);
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
                    src={imageSrc}
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
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                  {listLecturer.map((lecturer,index)=>(
                      <SelectItem key={lecturer._id} value={lecturer._id}>{lecturer.name}</SelectItem>
                    ))}
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
            <AlertDialogAction className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Xác nhận
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
