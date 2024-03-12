import { FullCoursePostCell } from "../components";
import { generateFakeCourse } from "../mock/home";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const course = await generateFakeCourse();
  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <div className="w-3/4">
        <FullCoursePostCell course={course} />
        <FullCoursePostCell course={course} />
      </div>
    </div>
  );
}
