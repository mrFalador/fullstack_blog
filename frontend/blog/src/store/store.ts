import { ArticleResponse } from "../models/response/ArticleResponse";
import { makeAutoObservable } from "mobx";
import ArticlesService from "../services/article-services";


export default class Store {
    articles = {} as ArticleResponse;
    isWrite = false
    oneArticle = -1



    constructor(){
        makeAutoObservable(this);
    }

    setArticles( article: ArticleResponse){
        this.articles = article;
    }

    setOneArticle(id : number){
        this.oneArticle = id;
    }

    setWrite(bool:boolean){
        this.isWrite = bool
    }

    async addArticle(title: string, content: string, isActive: boolean){
        try {
            const response = await ArticlesService.addArticle(title, content, isActive);
            this.setArticles(response.data);
            this.setWrite(false)
        } catch(e) {
            console.log(e.response?.data?.message);
        }
    }

}