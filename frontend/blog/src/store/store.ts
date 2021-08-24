import { makeAutoObservable } from "mobx";
import  i18next  from 'i18next'
import { ArticleResponse, IArticle } from "../types/index";
import ArticlesService from "../services/article-services";

export default class Store {
  articles = {} as ArticleResponse;
  isWrite = false;
  isEdit = false;
  articleID = 0;
  language = 'english'
  oneArticle = {
    id: 0,
    title: "Nan",
    content: "Nan",
    isActive: false,
  } as IArticle;
  seeArticle = false;

  componentWillMount() {
    this.setLang('english');
  }
  constructor() {
    makeAutoObservable(this);
  }

  setLang (lang: string){
    this.language = lang
  }

  setArticles(article: ArticleResponse) {
    this.articles = article;
  }

  setOneArticle( num : number) {
    this.oneArticle.id = num;
  }

  setWrite(bool: boolean) {
    this.isWrite = bool;
  }

  setEdit(bool: boolean) {
    this.isEdit = bool;
  }

  seeOneArticle(bool: boolean) {
    this.seeArticle = bool;
  }

  setID(id: number) {
    this.articleID = id;
  }

  async addArticle(title: string, content: string, isActive: boolean) {
    try {
      const response = await ArticlesService.addArticle(
        title,
        content,
        isActive
      );
      this.setArticles(response.data);
      this.setWrite(false);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async editArticle(
    id: number,
    title: string,
    content: string,
    isActive: boolean
  ) {
    try {
      const response = await ArticlesService.editArticle(
        id,
        title,
        content,
        isActive
      );
      this.setArticles(response.data);
      this.setWrite(false);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
