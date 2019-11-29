var categoryCtrl = require("../controller/categories");

var questionCtrl = require("../controller/questions");

module.exports = function(express, app) {
  var router = express.Router();

  router.get("/", function(req, res) {
    res.json("API Home Page");
  });

  router.get("/api/v1/category", categoryCtrl.get);
  router.get("/api/v1/question", questionCtrl.get);
  router.get("/api/v1/question/:id/category/:catId", questionCtrl.getById);
  router.get("/api/v1/question/category/:id", questionCtrl.getByCategoryId);

  app.use("/", router);
};
