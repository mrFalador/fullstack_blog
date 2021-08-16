import { ArticleResponse } from "../models/response/ArticleResponse";
import { makeAutoObservable } from "mobx";


export default class Store {
    articles = {} as ArticleResponse;


    constructor(){
        makeAutoObservable(this);
    }

    setArticles( article: ArticleResponse){
        this.articles = article;
    }
}