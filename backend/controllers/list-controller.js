const ArticleServices = require("../services/article-services");

class ArticlesController {
    async getArticles(req, res, next){
        try{
            const articlesToStore = await ArticleServices.getArticlesServ();
            return res.json(articlesToStore)
        } catch(e) {
            console.log(e);
        }
    };

    async getArticleOnID(req, res, next){
        try{
            const idForEdit = req.params.id
            const articleFromDb = await ArticleServices.findArticle(idForEdit)

            return res.json(articleFromDb);
            
        } catch(e) {
            console.log(e);
        }
    };

    async editArticle(req, res, next){
        try{
            const idForEdit = req.params.id;
            const { title, content, isActive} = req.body;
            const newArticles = await ArticleServices.editArticleServ(idForEdit, title, content, isActive);

            return res.json(newArticles);            
        } catch(e) {
            console.log(e);
        }
    };

    async addArticle(req, res, next){
        try{
            const {title, content, isActive} = req.body;
            const articleAdd = await ArticleServices.addArticleServ(title, content, isActive);
            return res.json(articleAdd) 
        } catch(e) {
            console.log(e);
        }
    };

    async deleteArticle(req, res, next){
        try{
            const idForDel = req.params.id;
            const newArticles = await ArticleServices.deleteArticleServ(idForDel);

            return res.json(newArticles)
            
        } catch(e) {
            console.log(e);
        }
    };
}

module.exports = new ArticlesController();