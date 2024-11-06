import { sendRequest } from "@/utils/api";
import CoursesDetail from "../courses.detail"; // Adjust the path if necessary
import { Courses } from "@/types/next-auth";
import { getLecturerByID } from "@/utils/actions";

interface IProps {
  params: { id: string }; // Expecting an id parameter in the URL
}
export default async function Page(props: IProps) {
  const { params } = props; // Extract the params object
  const res = await sendRequest<IBackendRes<Courses>>({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/courses/${params.id}` // Use params.id for the request
  });
  const resLecturer = await getLecturerByID(res.data?._idLecture);
  if (!res || !res.data) {
    return <div>Course not found.</div>; // Handle case where no data is returned
  }

  return (
    <div className="container bg-white mx-auto p-4 md:p-6 min-h-screen flex flex-col">
      <CoursesDetail courses={res?.data} lecturer={resLecturer?.data} /> {/* Pass the fetched data to CoursesDetail */}
    </div>
  );
}
