import { AxiosResponse } from "axios";
import $api from "../http";
import { ArticleResponse, IArticle } from "../types/index";

export default class ArticlesService {
  static async getArticles(): Promise<AxiosResponse<ArticleResponse[]>> {
    return $api.get<ArticleResponse[]>("/articles");
  }

  static async getArchive(): Promise<AxiosResponse<ArticleResponse[]>> {
    return $api.get<ArticleResponse[]>("/articles/archive");
  }

  static async getArticleOnID(id: number): Promise<AxiosResponse<IArticle>> {
    return $api.get<IArticle>(`/articles/edit/${id}`);
  }

  static async addArticle(
    title: string,
    content: string,
    isActive: boolean
  ): Promise<AxiosResponse<ArticleResponse>> {
    return $api.post<ArticleResponse>("/articles/add", {
      title,
      content,
      isActive,
    });
  }

  static async deleteArticle(id: number): Promise<AxiosResponse<IArticle>> {
    return $api.post<IArticle>(`/articles/delete/${id}`);
  }

  static async editArticle(
    id: number,
    title: string,
    content: string,
    isActive: boolean
  ): Promise<AxiosResponse<IArticle>> {
    return $api.post<IArticle>(`/articles/edit/${id}`, {
      title,
      content,
      isActive,
    });
  }
}
