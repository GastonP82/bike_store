const express = require("express");
const productController = require("../../controllers/apis/productsController")
const router = express.Router();


// apis/products
router.get("/", productController.list)
router.get("/:id", productController.detail)

module.exports = router;
