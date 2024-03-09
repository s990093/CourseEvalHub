import { Button } from "../button";

interface CourseCellProps {
  courseName: string;
}
const CourseCell: React.FC<CourseCellProps> = ({ courseName }) => {
  return (
    <div className="flex justify-center m-1 items-center border bg-blue h-5 w-10 rounded-md bg-blue-500 text-white hover:bg-[#fb923c]">
      <button> {courseName}</button>
    </div>
  );
};

const Course = () => {
  const courses = 50; // 设置课程数
  const weekly = 5; // 设置每周的课程数

  // 生成课程单元格的数组
  const cells = [];
  for (let i = 0; i < courses; i++) {
    cells.push(<CourseCell key={i} courseName={`${i + 1}`} />);
  }

  // 生成行的数组
  const rows = [];
  for (let i = 0; i < weekly; i++) {
    rows.push(
      <div key={i} className="grid grid-cols-5">
        {cells.slice(i * 10, (i + 1) * 10)}
      </div>
    );
  }

  return (
    <div className="bg-[#9ca3af] rounded shadow-md p-4 transition duration-300">
      <h1 className="flex justify-center text-xl font-bold m-3">課表</h1>
      <div className="flex flex-row">
        <div className="flex flex-col m-2 space-y-3 items-center relative ">
          <Button>核心</Button>
          <Button>博雅</Button>
          <Button>體育</Button>
          <div className="absolute inset-x-0 bottom-0">
            <Button>搜索</Button>
          </div>
        </div>

        <div className="max-w-lg mx-auto">{rows}</div>
      </div>
    </div>
  );
};

export default Course;
