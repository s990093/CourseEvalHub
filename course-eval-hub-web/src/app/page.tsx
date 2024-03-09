"use client";

import {
  Course,
  HalfCoursePostCell,
  FullCoursePostCell,
  BannerCard,
  EveuateCard,
} from "./components";

export default function Home() {
  return (
    <div>
      <div className="flex m-4 space-x-4">
        <div className="w-1/2 space-y-4">
          <Course />
          <BannerCard />
          <EveuateCard />
        </div>
        <div className="w-1/2 flex flex-col space-y-4">
          <HalfCoursePostCell />
          <HalfCoursePostCell />
          <HalfCoursePostCell />
        </div>
      </div>
      {/* full course */}
      <div className="flex flex-col items-center justify-center m-3 space-y-4">
        <FullCoursePostCell />
        <FullCoursePostCell />
        <FullCoursePostCell />
        <p>more...</p>
      </div>
    </div>
  );
}
