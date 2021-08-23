export interface ArticleResponse {
  id: number;
  title: string;
  content: string;
  isActive: boolean;
  createdAt: Date;
}

export interface IArticle {
  id: number;
  title: string;
  content: string;
  isActive: boolean;
  createdAt: Date;
}

export interface Iid {
  id: string;
}
