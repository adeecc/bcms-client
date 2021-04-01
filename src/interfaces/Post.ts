export interface Post {
  id: string;
  title: string;
  body: string;
  courseName: string;
  created_at: Date;
  updated_at: Date;
  tags?: string[];
}
