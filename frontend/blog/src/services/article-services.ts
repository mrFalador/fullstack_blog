import $api from '../http';
import { AxiosResponse } from 'axios';
import { ArticleResponse } from '../models/response/ArticleResponse';

export default class ArticlesService{
    static async getArticles():Promise<AxiosResponse<ArticleResponse[]>>{
        return $api.get<ArticleResponse[]>('/articles')
    }

    static async getArchive():Promise<AxiosResponse<ArticleResponse[]>>{
        return $api.get<ArticleResponse[]>('/articles/archive')
    }

    static async addArticle(title: string, content: string, isActive: boolean):Promise<AxiosResponse<ArticleResponse>>{
        return $api.post<ArticleResponse>('/articles/add', {title, content, isActive})
    }
}