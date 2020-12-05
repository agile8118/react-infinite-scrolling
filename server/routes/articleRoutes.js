const Article = require("../database/models/article");

module.exports = (app) => {
  app.get("/api/articles", async (req, res) => {
    const page = parseInt(req.query.page);
    const perPage = 12;
    const totalArticlesLen = await Article.countDocuments().exec();

    let totalPages;
    if (totalArticlesLen % perPage > 0) {
      totalPages = Math.floor(totalArticlesLen / perPage) + 1;
    } else {
      totalPages = Math.floor(totalArticlesLen / perPage);
    }

    let showingUntil;
    if (perPage * page > totalArticlesLen) {
      showingUntil = totalArticlesLen;
    } else {
      showingUntil = perPage * page;
    }

    const articles = await Article.find({})
      .limit(perPage)
      .skip(perPage * (page - 1))
      .sort({ date: -1 });
    res.send({
      articlesData: articles,
      paginationData: {
        totalPages,
        currentPage: page,
        showingFrom: perPage * page - perPage + 1,
        showingUntil,
        totalResults: totalArticlesLen,
      },
    });
  });
};