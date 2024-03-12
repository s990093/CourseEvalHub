"use client";

import { EveuateCard, FullCoursePostCell } from "../components";
import { generateFakeCourse, generateFakeHomePage } from "../mock/home";

export default function Discover() {
  const course = generateFakeHomePage();
  return (
    <div className="flex justify-center m-4">
      <div className="flex-col space-y-4">
        <EveuateCard />
        <div className="flex flex-col items-center justify-center m-3 space-y-4">
          {course.courses.map((course, index) => (
            <FullCoursePostCell key={course.id} course={course} />
          ))}
          <p>more ...</p>
        </div>
      </div>
    </div>
  );
}
