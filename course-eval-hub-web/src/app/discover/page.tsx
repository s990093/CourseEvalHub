"use client";

import { EveuateCard, FullCoursePostCell } from "../components";

export default function Discover() {
  return (
    <div className="flex justify-center m-4">
      <div className="flex-col space-y-4">
        <EveuateCard />
        <div className="flex flex-col items-center justify-center m-3 space-y-4">
          <FullCoursePostCell />
          <FullCoursePostCell />
          <FullCoursePostCell />
          <FullCoursePostCell />
          <p>more ...</p>
        </div>
      </div>
    </div>
  );
}
