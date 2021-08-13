require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "postgres" }
);
const articleModel = require("../models/articles")(sequelize, Sequelize.DataTypes);

class ArticleServices{
    async addArticleServ(title, content, isActive){
        try{
        const newArticle = articleModel.build({ title:title, content:content, isActive:isActive});
        await newArticle.save();
        return newArticle
        } catch(e) {
            console.log(e);
        }
    };

    async getArticlesServ(){
        const bdArticles = await articleModel.findAll({ where: { isActive: true } });
        return bdArticles
    };

    async deleteArticleServ(id){
        await articleModel.destroy({ where: { id: id }});
        const bdArticles = await articleModel.findAll({ where: { isActive: true } });
        return bdArticles
    };

    async findArticle(id){
        const articleFromDb = await articleModel.findOne({where: { id: id }})
        return articleFromDb
    };

    async editArticleServ(id, title, content, isActive){
        let articleFromDb = await articleModel.findOne({ where: { id: id }});
        articleFromDb.title = title;
        articleFromDb.content = content;
        articleFromDb.isActive = isActive;
        await articleFromDb.save();
        const bdArticles = await articleModel.findAll({ where: { isActive: true } });
        return bdArticles
    }

}

module.exports = new ArticleServices ();