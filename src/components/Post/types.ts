export interface IPost {
  author: string;
  created: number;
  preview?: any;
  num_comments: number;
  thumbnail: string | null;
  title: string;
  visited: boolean;
}
