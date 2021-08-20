const ArticleServices = require("../services/article-services");

class ArticlesController {
  async getArticles(req, res, next) {
    try {
      const articlesToStore = await ArticleServices.getArticlesServ();
      return res.json(articlesToStore);
    } catch (e) {
      next(e);
    }
  }

  async getArticleOnID(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const articleFromDb = await ArticleServices.findArticle(JSON.parse(id));

      return res.json(articleFromDb);
    } catch (e) {
      next(e);
    }
  }

  async editArticle(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const { title, content, isActive } = req.body;
      const newArticles = await ArticleServices.editArticleServ(
        id,
        title,
        content,
        isActive
      );

      return res.json(newArticles);
    } catch (e) {
      next(e);
    }
  }

  async addArticle(req, res, next) {
    try {
      const { title, content, isActive } = req.body;
      const articleAdd = await ArticleServices.addArticleServ(
        title,
        content,
        isActive
      );
      return res.json(articleAdd);
    } catch (e) {
      next(e);
    }
  }

  async deleteArticle(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const newArticles = await ArticleServices.deleteArticleServ(id);

      return res.json(newArticles);
    } catch (e) {
      next(e);
    }
  }

  async getArchive(req, res, next) {
    try {
      const articlesToStore = await ArticleServices.getArchiveServ();
      return res.json(articlesToStore);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ArticlesController();
