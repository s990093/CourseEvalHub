import { Course, HomePageData, Tag } from "../interface";
import { fakerZH_TW as faker } from "@faker-js/faker";

// export const faker = new Faker({
//   locale: [zh_TW],
// });
export function generateFakeCourse(): Course {
  return {
    id: faker.number.int({ min: 1000, max: 1300 }),
    info: {
      course: faker.helpers.arrayElement([
        "人體探索",
        "近代東亞與台灣",
        "健康醫學與生活",
        "健康醫學與生活",
        "聖經思想",
        "近代東亞與台灣",
      ]),
      teacher: faker.person.fullName(),
      type: faker.helpers.arrayElement(["博雅", "核心", "選修", "體育"]),
    },
    rating: {
      quality: faker.number.int({ min: 1, max: 5 }),
      sweetness: faker.number.int({ min: 1, max: 5 }),
      coolness: faker.number.int({ min: 1, max: 5 }),
      homework: faker.number.int({ min: 1, max: 5 }),
    },
    recommendation: faker.number.int({ min: 0, max: 5 }),
    totalStudents: faker.number.int(),
    timestamp: faker.date.recent(),
    comments: faker.helpers.arrayElement([
      "這門課是四個老師分別上一部份，所以你整堂課會見到四位老師，教室都不用換，四個老師有三個只要交上課學到什麼東西的心得報告(我猜字數愈多分數愈高)，一個老師會有課後的隨堂小考(但不難，簡單的選擇題而已，只要有上課都答得出來，不要因為這樣放掉這門好課)，我全勤報告都有寫滿一面a4紙，上課做其他事情不影響上課老師都不會管，期中期末交完報告就可以離開去讀其他課的考試，最後成績9X，推不想花在通識上太多時間，願意花一點點的時間寫報告的人",
      "老師人很好 上課可以做自己的事 缺點就真的是作業 每個禮拜都要寫讀經心得跟回答給老師的題目(放假不上課也會有作業) 自主學習週也會有 作業整體量多內容不硬 不想上台跟想穩過的可以選(不甜哦)      ",
      "期中是上課看紀錄片寫報告，期末是看指定文本寫報告，有一次線上課後測驗，佔5%。幾乎每堂課都會點名。老師說話有點催眠，沒興趣可能會睡著",
    ]),
  };
}

function generateFakeTags(): Tag {
  return {
    id: faker.number.int({ min: 1000, max: 1300 }),
    title: faker.helpers.arrayElement([
      "人體探索",
      "近代東亞與台灣",
      "健康醫學與生活",
      "健康醫學與生活",
      "聖經思想",
      "近代東亞與台灣",
    ]),
  };
}
export const fakeCourses: Course[] = Array.from({ length: 10 }, () =>
  generateFakeCourse()
);

export const fakeCourse: Course[] = Array.from({ length: 1 }, () =>
  generateFakeCourse()
);

export const fakeTags: Tag[] = Array.from({ length: 10 }, () =>
  generateFakeTags()
);

export function generateFakeHomePage(): HomePageData {
  return {
    courses: fakeCourses,
    forNKUST: fakeTags,
    everyoneWatch: fakeTags,
    newsInfo: fakeTags,
  };
}
