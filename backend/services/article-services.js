require("dotenv").config();
const Sequelize = require("sequelize");
const ApiErrors = require("../exeptions/api-errors");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "postgres" }
);
const articleModel = require("../models/articles")(
  sequelize,
  Sequelize.DataTypes
);

class ArticleServices {
  async addArticleServ(title, content, isActive) {
    try {
      const newArticle = articleModel.build({ title, content, isActive });
      await newArticle.save();
      return newArticle;
    } catch (e) {
      console.log(e);
    }
  }

  getArticlesServ = async () => articleModel.findAll({where: { isActive: true }});

  deleteArticleServ = async (id) => await articleModel.destroy({ where: { id: id } });

  findArticle = async (id) => await articleModel.findOne({ where: { id: id } });

  getArchiveServ = async () => articleModel.findAll({where: { isActive: false }});

  async editArticleServ(id, title, content, isActive) {
    let articleFromDb = await articleModel.findOne({ where: { id: id } });
    if (!articleFromDb) {
      throw ApiErrors.notFound("Article not found");
    }
    articleFromDb.title = title;
    articleFromDb.content = content;
    articleFromDb.isActive = isActive;
    await articleFromDb.save();
    const bdArticles = await articleModel.findAll({
      where: { isActive: true },
    });
    return bdArticles;
  }



}

module.exports = new ArticleServices();
