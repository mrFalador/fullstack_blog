const Router = require("express").Router;
const ArticlesController = require("../controllers/list-controller");

const router = new Router();

router.get("/articles", ArticlesController.getArticles);
router.get("/articles/edit/:id", ArticlesController.getArticleOnID);

router.post("/articles/edit/:id", ArticlesController.editArticle)
router.post("/articles/add", ArticlesController.addArticle);
router.post("/articles/delete/:id", ArticlesController.deleteArticle);

module.exports = router;