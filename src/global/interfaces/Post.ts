
export interface Tag {
  tag: string;
}
export interface Post {
  pid: string | number;
  title: string;
  body: string;
  posted_in: number;
  created_at: string;
  updated_at: string;
  tags?: Tag[];
}
