import Tags from "../card/tags";

const HalfCoursePostCell = () => {
  return (
    <div className="bg-[#9ca3af] rounded-lg shadow-lg p-4 cursor-pointer  transition duration-300">
      <h2 className="text-xl font-bold">人體探索 # 1209 核心</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg">
          {/* 第一部分 - 課程內容 */}
          <h2 className="text-lg font-bold mb-4">課程內容</h2>
          {/* 这里添加你的課程內容 */}
          <div className="grid gird-rows-2">
            <Tags />
            <Tags />
            <Tags />
            <Tags />
          </div>
        </div>
        <div className=" p-4 rounded-lg">
          {/* 第二部分 - 評論 */}
          <h2 className="text-lg font-bold mb-4">評論</h2>
          <div>
            很涼很甜(線上課，只須到場三次)。作業都有交的話分數會很高，期中期末考都是考放在創課上的電子檔，有看有分，很簡單。期末會有一堂課去看大體老師，但我們看到的只會是拿出來的器官，不會很恐怖。
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfCoursePostCell;
