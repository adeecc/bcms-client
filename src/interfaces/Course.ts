import { Post } from "./Post";

export interface Course {
  id: string;
  name: string;
  code: string;
  instructor: string;
  year: string;
  sem: string;
  posts?: Post[];
}
