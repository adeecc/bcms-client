import { Course } from "./Course";

export interface User {
  id: string;
  username: string;
  fullName: string;
  courses?: Course[];
}
