export interface Post {
  id: string;
  title: string;
  courseName: string;
  created_at: Date;
  updated_at: Date;
  tags?: string[];
}
