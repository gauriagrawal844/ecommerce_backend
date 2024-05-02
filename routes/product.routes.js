const ProductController = require("../controllers/product.controller");
const router = require("express").Router();

router.post("/create", ProductController.create);
router.get("/all", ProductController.all);
router.get("/single", ProductController.get);
router.delete("/delete", ProductController.delete);
router.put("/update", ProductController.update);

module.exports = router;