import { Course } from "./course";
import { Tag } from "./tags";

export interface HomePageData {
  courses: Course[];
  forNKUST: Tag[];
  everyoneWatch: Tag[];
  newsInfo: Tag[];
}
