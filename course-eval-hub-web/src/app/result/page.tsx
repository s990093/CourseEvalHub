"use client";
import { useSearchParams } from "next/navigation";
import { FullCoursePostCell } from "../components";

interface ResultProps {
  // Define any props needed for the component
}

// Define the Result component as a functional component with the specified type
const Result: React.FC<ResultProps> = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div className="lex justify-center m-4">
      <div>
        <h2>Reslut: {query}</h2>
      </div>
      <div className="flex flex-col items-center justify-center m-3 space-y-4">
        <FullCoursePostCell />
        <FullCoursePostCell />
        <FullCoursePostCell />
        <FullCoursePostCell />
        <FullCoursePostCell />
      </div>
    </div>
  );
};

// Export the Result component as the default export of this module
export default Result;
