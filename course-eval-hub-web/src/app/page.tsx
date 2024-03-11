import {
  Curriculum,
  HalfCoursePostCell,
  FullCoursePostCell,
  BannerCard,
  EveuateCard,
  AnaylsisBanner,
} from "./components";

// interface
import { HomePageData } from "./interface/index";
import { generateFakeHomePage } from "./mock/home";

async function getData() {
  const res = await generateFakeHomePage();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res;
}

export default async function Home() {
  const homePageData = await getData();
  // 截取前三筆資料
  const firstThreeCourses = homePageData.courses.slice(0, 3);
  // 截取第四筆及之後的資料
  const restCourses = homePageData.courses.slice(3);

  return (
    <div>
      <div className="flex m-4 space-x-4">
        <div className="w-1/2 space-y-4">
          <Curriculum />
          <BannerCard />
          <EveuateCard />
          <AnaylsisBanner />
          <AnaylsisBanner />
        </div>
        <div className="w-1/2 flex flex-col space-y-4">
          {firstThreeCourses.map((course) => (
            <HalfCoursePostCell key={course.id} course={course} />
          ))}
        </div>
      </div>
      {/* full course */}
      <div className="flex flex-col items-center justify-center m-3 space-y-4">
        {restCourses.map((course) => (
          <FullCoursePostCell key={course.id} course={course} />
        ))}

        <p>more...</p>
      </div>
    </div>
  );
}
