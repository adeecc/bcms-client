export interface Post {
  id: string;
  title: string;
  body: string;
  courseName: string;
  created_at: string;
  updated_at: string;
  tags?: string[];
}
