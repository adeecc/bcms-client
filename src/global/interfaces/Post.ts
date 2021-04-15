
export interface Tag {
  tid: string | number | null;
  tag: string;
}
export interface Post {
  pid: string | number;
  title: string;
  body: string;
  posted_in: number;
  name?: string;
  created_at: string;
  updated_at: string;
  tags?: Tag[];
  course_name?: string;
}
