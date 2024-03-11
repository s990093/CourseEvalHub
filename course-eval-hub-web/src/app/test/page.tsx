import { FullCoursePostCell } from "../components";
import { generateFakeCourse } from "../mock/home";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const course = await generateFakeCourse();
  return (
    <div className="flex justify-center">
      <FullCoursePostCell course={course} />
    </div>
  );
}
